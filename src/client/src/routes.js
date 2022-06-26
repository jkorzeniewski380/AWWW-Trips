import { generatePath } from "react-router";

export const bookRoute = '/book/:id';
export const tripRoute = '/trip/:id';
export const mainRoute = '/';

export const getTripRoute = (id) => generatePath(tripRoute, { id });
export const getBookRoute = (id) => generatePath(bookRoute, { id });
