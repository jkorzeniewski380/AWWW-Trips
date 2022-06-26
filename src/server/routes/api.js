const express = require("express");
const { check, validationResult } = require("express-validator");
const { get_db_postgres } = require("../database/database");
const { get_all_wycieczki, get_wycieczka } = require("../database/queries");
const router = express.Router();

router.use(async (_req, res, next) => {
    try {
        const db = await get_db_postgres();
        res.locals.db = db;
        return next();
    } catch (error) {
        next(error);
    }
});

const with_wycieczka = (init_transaction = false) =>
    async (req, res, next) => {
        const { db } = res.locals;
        let t = null;
        if (init_transaction) t = await db.sequelize.transaction();
        const { id } = req.body;
        const { wycieczka } = await get_wycieczka(db, id, t);
        if (!wycieczka) {
            next(new Error(`Nie można odnaleźć wycieczki z id: ${id}`));
        }
        res.locals.trip = wycieczka;
        res.locals.t = t;
        return next();
    };

const parseErrors = (mapped) => Object.values(mapped).map(({ msg }) => msg).join("\n");

const withCommit = async (t, callback) => {
    await t.commit();
    return callback();
}

const withRollback = async (t, callback) => {
    await t.rollback();
    return callback();
}

router.get("/trips", async (_req, res) => {
    try {
        const { db } = res.locals;
        const trips = await get_all_wycieczki(db);
        res.status(200).send(trips);
    } catch (error) {
        res.status(err.status).json({ error });
    }
});

router.post("/trip", with_wycieczka(), async (_req, res) => {
    res.status(200).json(res.locals.trip);
});

router.post(
    "/book",
    with_wycieczka(true),
    check("email").isEmail().withMessage("Proszę wpisać poprawny email!"),
    check("first_name").notEmpty().withMessage("Imię nie może być puste!"),
    check("last_name").notEmpty().withMessage("Nazwisko nie może być puste!"),
    check("n_people")
        .isInt({ min: 0 })
        .withMessage("Liczba zgłoszeń musi być większa od 0!"),
    async (req, res) => {
        const { trip, t } = res.locals;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return withRollback(t, () =>
                res.status(400).send(parseErrors(errors.mapped()))
            );
        }

        if (req.body.n_people > trip.liczba_dostepnych_miejsc) {
            return withRollback(t, () =>
                res.status(400).send("Brak wystarczającej liczby wolnych miejsc!")
            );
        }

        try {
            const { db } = res.locals;
            const zgloszenie = await db.Zgloszenie.create(
                {
                    imie: req.body.first_name,
                    nazwisko: req.body.last_name,
                    email: req.body.email,
                    liczba_miejsc: req.body.n_people,
                },
                { transaction: t }
            );
            await trip.addZgloszenie(zgloszenie, { transaction: t });
            trip.liczba_dostepnych_miejsc -= req.body.n_people;
            await trip.save({ transaction: t });
            return withCommit(t, () =>
                res.status(200).send("Reservation successfull")
            );
        } catch (error) {
            if (error instanceof ValidationError) {
                return withRollback(t, () =>
                    res.status(400).send("Wprowadzono niepoprawne dane!")
                );
            }
            return withRollback(t, () =>
                res.status(500).send("Nieznany błąd!")
            );
        }
    }
)

module.exports = router;
