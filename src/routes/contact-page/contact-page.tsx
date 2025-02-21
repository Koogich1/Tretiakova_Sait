import React from "react"
import { type RouteObject } from 'react-router';
import { ROUTES } from '../../constants/routes';
import ContactPage from '../../pages/ContactPage';

export const contactPage: RouteObject = {
    path: ROUTES.contactPage,
    element: <ContactPage />,
};
