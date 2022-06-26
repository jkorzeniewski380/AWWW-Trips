const { Sequelize, DataTypes } = require("sequelize");
const _wycieczka = require("./wycieczka.js");
const _zgloszenie = require("./zgloszenie.js");

const get_db = async (sequelize) => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        const db = {};
        
        db.sequelize = sequelize;
      
        db.Wycieczka = _wycieczka(sequelize, Sequelize, DataTypes);
        db.Zgloszenie = _zgloszenie(sequelize, Sequelize, DataTypes);

        db.Wycieczka.hasMany(db.Zgloszenie);
        db.Zgloszenie.belongsTo(db.Wycieczka);
      
        return db;
    } catch (error) {
        console.log("Could not establish connection");
        console.error(error.message);
        throw error;
    }
};

const get_db_postgres = async () => {
    const sequelize = new Sequelize(
        `postgres://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@localhost:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`);
    return await get_db(sequelize);
};

module.exports = {
    get_db,
    get_db_postgres
};
