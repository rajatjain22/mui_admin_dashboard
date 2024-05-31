/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Argon Dashboard 2 MUI Base Styles
import colors from "../../base/colors";
import borders from "../../base/borders";
import boxShadows from "../../base/boxShadows";

// Argon Dashboard 2 MUI Helper Function
import rgba from "../../functions/rgba";

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { cardBoxShadow } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      wordWrap: "break-word",
      backgroundColor: "white.main",
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba("black", 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: cardBoxShadow,
    },
  },
};

export default card;
