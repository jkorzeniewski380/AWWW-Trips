import { fromPairs, map as rMap, pipe } from "ramda";
import { combineEpics, ofType } from "redux-observable";
import { catchError, from, mergeMap, of } from "rxjs";
import { fetchTripsError, fetchTripsSuccess, fetchTripSuccess, fetchTripError, bookTripSuccess, bookTripError } from "./actions";
import { apiFetchTrips, apiFetchTrip, apiBookTrip } from "./api";
import { TRIPS_ACTION_TYPES } from "./const";

const fetchTripsEpic = (action$) => action$.pipe(
    ofType(TRIPS_ACTION_TYPES.FETCH_TRIPS_REQUEST),
    mergeMap(() => from(apiFetchTrips()).pipe(
        mergeMap((trips) => {
            const mappedTrips = pipe(
                rMap((trip) => [trip.id, trip]),
                fromPairs
            )(trips);
            return of(fetchTripsSuccess(mappedTrips));
        }),
        catchError((error) => {
            console.error(error);
            return of(fetchTripsError());
        })
    ))
);

const fetchTripEpic = (action$) => action$.pipe(
    ofType(TRIPS_ACTION_TYPES.FETCH_TRIP_REQUEST),
    mergeMap(({ id }) => from(apiFetchTrip(id)).pipe(
        mergeMap((trip) => of(fetchTripSuccess(trip))),
        catchError((error) => {
            console.error(error);
            return of(fetchTripError());
        })
    ))
);

const bookTripEpic = (action$) => action$.pipe(
    ofType(TRIPS_ACTION_TYPES.BOOK_TRIP_REQUEST),
    mergeMap((values) => from(apiBookTrip(values)).pipe(
        mergeMap((success) => of(bookTripSuccess(success))),
        catchError((error) => of(bookTripError(error.response?.data)))
    ))
);

export const tripsEpics = combineEpics(
    fetchTripsEpic,
    fetchTripEpic,
    bookTripEpic
);
