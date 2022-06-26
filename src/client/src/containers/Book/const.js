import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
    first_name: Yup.string().max(40, "Za długie imie").required(),
    last_name: Yup.string().max(40, "Za długie nazwisko").required(),
    phone: Yup.string().matches(/[0-9]{9}/, "Numer powinien składać się z 9 cyfr.").required(),
    email: Yup.string().email("Email powinien być prawidłowy").required(),
    n_people: Yup.number().min(1, "Co najmniej 1 osoba").max(4, "Co najwyżej 4 osoby").required()
});

export const initialValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    n_people: 1
};

export const fieldNameToLabel = {
    first_name: "Imie",
    last_name: "Nazwisko",
    phone: "Telefon",
    email: "Email",
    n_people: "Liczba miejsc"
};
