import React from "react"
import { type RouteObject } from 'react-router';
import { ROUTES } from '../../constants/routes';
import HomePage from '../../pages/HomePage';

export const homePage: RouteObject = {
    path: ROUTES.homePage,
    element: <HomePage />,
};
