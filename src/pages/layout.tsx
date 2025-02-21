import React from "react"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <main className="content">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
