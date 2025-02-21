import { createBrowserRouter, RouteObject } from "react-router-dom";
import { anyRoute } from "./routes/any-route/any-route";
import { contactPage } from "./routes/contact-page/contact-page";
import { homePage } from "./routes/home-page/home-page";
import { myWorksPage } from "./routes/my-works-page/my-works-page";
import { notFound } from "./routes/not-found/not-found";
import { priceCalculatorPage } from "./routes/price-calculator/price-calculator";
import { adminPage } from "./routes/admin-page/admin-page";

const routes: RouteObject[] = [
  {
    path: "/",
    //ТУТ НАДО ВСТАВИТЬ NAVBAR
    children: [
      homePage,
      contactPage,
      myWorksPage,
      priceCalculatorPage,
      adminPage,
    ],
  },
  notFound,
  anyRoute,
];

export const AppRouter = createBrowserRouter(routes);
