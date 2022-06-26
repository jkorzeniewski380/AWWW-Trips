import { TRIPS_ACTION_TYPES } from "./const";

export const fetchTripsRequest = () => ({
    type: TRIPS_ACTION_TYPES.FETCH_TRIPS_REQUEST
});

export const fetchTripsSuccess = (trips) => ({
    type: TRIPS_ACTION_TYPES.FETCH_TRIPS_SUCCESS,
    trips
});

export const fetchTripsError = () => ({
    type: TRIPS_ACTION_TYPES.FETCH_TRIPS_ERROR
});

export const fetchTripRequest = (id) => ({
    type: TRIPS_ACTION_TYPES.FETCH_TRIP_REQUEST,
    id
});

export const fetchTripSuccess = (trip) => ({
    type: TRIPS_ACTION_TYPES.FETCH_TRIP_SUCCESS,
    trip
});

export const fetchTripError = () => ({
    type: TRIPS_ACTION_TYPES.FETCH_TRIP_ERROR
});

export const bookTripRequest = (id, values) => ({
    type: TRIPS_ACTION_TYPES.BOOK_TRIP_REQUEST,
    id,
    ...values
});

export const bookTripSuccess = (success) => ({
    type: TRIPS_ACTION_TYPES.BOOK_TRIP_SUCCESS,
    success
});

export const bookTripError = (error) => ({
    type: TRIPS_ACTION_TYPES.BOOK_TRIP_ERROR,
    error
});
