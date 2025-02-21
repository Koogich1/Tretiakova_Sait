import React from "react"
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./app-router";

export const App = () => {
  return (
    <main className="max-w-[1440px] mx-auto">
      <RouterProvider router={AppRouter} />
    </main>
  );
};

export default App;
