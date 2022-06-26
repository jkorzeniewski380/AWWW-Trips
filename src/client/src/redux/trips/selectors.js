import { createSelector } from "reselect";
import { LOADING_STATES } from "./const";
import { TRIPS_REDUCER_NAME } from "./reducer";

const tripsState = (state) => state[TRIPS_REDUCER_NAME];

export const tripsMapSelector = createSelector(
    tripsState,
    (state) => state.get('trips')
)

export const tripsSelector = createSelector(
    tripsMapSelector,
    (trips) => trips.valueSeq().toList()
);

export const tripSelector = createSelector(
    tripsMapSelector,
    (trips) => (id) => trips.get(id)
);

export const tripsLoadingStateSelector = createSelector(
    tripsState,
    (state) => state.get('tripsLoadingState')
);

export const tripsLoadedSelector = createSelector(
    tripsLoadingStateSelector,
    (loading) => loading === LOADING_STATES.LOADED
);

export const tripsLoadErrorSelector = createSelector(
    tripsLoadingStateSelector,
    (loading) => loading === LOADING_STATES.ERROR
);

export const bookTripStateSelector = createSelector(
    tripsState,
    (state) => state.get("bookTripState")
);
