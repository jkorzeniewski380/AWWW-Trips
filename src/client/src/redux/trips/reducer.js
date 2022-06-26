import { fromJS, Map } from "immutable";
import { LOADING_STATES, STATUS, TRIPS_ACTION_TYPES } from "./const";

const initialState = fromJS({
    tripsLoadingState: LOADING_STATES.IDLE,
    bookTripState: {
        status: STATUS.UNKNOWN,
        message: ""
    },
    trips: []
});

export const TRIPS_REDUCER_NAME = "trips";

export const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRIPS_ACTION_TYPES.FETCH_TRIPS_REQUEST:
            return state.set("tripsLoadingState", LOADING_STATES.LOADING);
        case TRIPS_ACTION_TYPES.FETCH_TRIPS_SUCCESS:
            return state.set("tripsLoadingState", LOADING_STATES.LOADED)
                .set("trips", fromJS(action.trips));
        case TRIPS_ACTION_TYPES.FETCH_TRIP_SUCCESS:
            return state.setIn(["trips", action.trip.id], fromJS(action.trip))
        case TRIPS_ACTION_TYPES.FETCH_TRIPS_ERROR:
            return state.set("tripsLoadingState", LOADING_STATES.ERROR);
        case TRIPS_ACTION_TYPES.BOOK_TRIP_REQUEST:
            return state.set("bookTripState", Map({
                status: STATUS.UNKNOWN,
                message: ""
            }));
        case TRIPS_ACTION_TYPES.BOOK_TRIP_SUCCESS:
            return state.set("bookTripState", Map({
                status: STATUS.SUCCESS,
                message: action.success
            }));
        case TRIPS_ACTION_TYPES.BOOK_TRIP_ERROR:
            return state.set("bookTripState", Map({
                status: STATUS.SUCCESS,
                message: action.error
            }));
        default:
            return state;
    }
};
