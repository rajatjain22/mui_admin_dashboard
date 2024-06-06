import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation, Link as RouterLink } from "react-router-dom";

export default function CustomBreadcrumbs() {
  const { pathname } = useLocation();
  const pathArray = pathname.split("/").filter((e) => e !== "");
  const lastPath = pathArray.splice(pathArray.length - 1);

  const createBreadcrumbs = () => {
    let path = "/";
    return pathArray.map((val, index) => {
      path += `${val}/`;
      return (
        <Link
          key={index}
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            textTransform: "capitalize",
          }}
          component={RouterLink}
          to={path}
        >
          {val}
        </Link>
      );
    });
  };

  return (
    <div role="presentation" style={{ marginBottom: "16px" }}>
      <Breadcrumbs sx={{ color: "white" }} aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          component={RouterLink}
          to="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        {createBreadcrumbs()}

        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            textTransform: "capitalize",
          }}
          color="#dbcbcb"
          fontWeight="bold"
        >
          {lastPath.length ? lastPath[0] : "dashboard"}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
