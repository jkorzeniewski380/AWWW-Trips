import axios from "axios";

export const apiFetchTrips = async () => {
    const { data } = await axios.get('/api/trips');

    return data;
};

export const apiFetchTrip = async (id) => {
    const { data } = await axios.post('/api/trip', { id });

    return data;
};

export const apiBookTrip = async (values) => {
    const { data } = await axios.post('/api/book', values);

    return data;
};
