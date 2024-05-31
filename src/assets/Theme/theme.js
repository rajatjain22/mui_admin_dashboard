import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import card from "./components/card/card";

const theme = createTheme({
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
  },
});

export { theme };
