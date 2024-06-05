import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../components/Sidenav/Sidenav";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs/CustomBreadcrumbs";

function ProtectorRouter() {
  return (
    <Sidenav>
      <CustomBreadcrumbs />
      <Outlet />
    </Sidenav>
  );
}

export default ProtectorRouter;
