import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../components/Sidenav/Sidenav";

function ProtectorRouter() {
  return (
    <Sidenav>
      <Outlet />
    </Sidenav>
  );
}

export default ProtectorRouter;
