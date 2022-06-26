import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tripsEpics } from './trips/epics';
import { tripsReducer, TRIPS_REDUCER_NAME } from './trips/reducer';

const rootEpics = combineEpics(tripsEpics);

const epicMiddleware = createEpicMiddleware();

const reducers = combineReducers({
    [TRIPS_REDUCER_NAME]: tripsReducer
});

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpics);
