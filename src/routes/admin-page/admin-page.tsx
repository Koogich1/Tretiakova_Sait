import React from "react"
import { Navigate, RouteObject } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const adminPage: RouteObject = {
    path: ROUTES.adminPage,
    element: <Navigate to={ROUTES.adminPage} replace={true} />,
};
