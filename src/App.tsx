import React from "react"
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./app-router";

export const App = () => {
  return (
    <main className="max-w-[1440px] mx-auto px-[5%]">
      <RouterProvider router={AppRouter} />
    </main>
  );
};

export default App;
