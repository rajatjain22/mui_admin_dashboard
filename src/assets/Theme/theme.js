import { createTheme } from "@mui/material/styles";
import card from "./components/card/card";
import link from "./components/link/link";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      msm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiCard: { ...card },
    MuiLink: { ...link },
  },
});

export { theme };
