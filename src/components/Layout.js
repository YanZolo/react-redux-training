import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import RuleList from "./RuleList";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
