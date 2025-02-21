import React from "react"
import { type RouteObject } from 'react-router';
import { ROUTES } from '../../constants/routes';
import PriceCalculatorPage from '../../pages/PriceCalculatorPage';

export const priceCalculatorPage: RouteObject = {
    path: ROUTES.calculatorPage,
    element: <PriceCalculatorPage />,
};
