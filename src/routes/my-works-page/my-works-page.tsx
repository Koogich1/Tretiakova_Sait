import React from "react"
import { type RouteObject } from "react-router";
import { ROUTES } from "../../constants/routes";
import MyWorksPage from "../../pages/MyWorksPage";

export const myWorksPage: RouteObject = {
  path: ROUTES.myWorksPage,
  element: <MyWorksPage />,
};
