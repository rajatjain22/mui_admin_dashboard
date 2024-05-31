import * as React from "react";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MuiCard from "@mui/material/Card";
import { Typography, CardContent } from "@mui/material";

export default function HomeCard() {
  return (
    <MuiCard
      variant="outlined"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 2,
        p: 2,
        width: { sm: "48%", lg: "100%" },
      }}
    >
      <React.Fragment>
        <CardContent
          sx={{
            p: 0,
          }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            TODAY'S MONEY
          </Typography>
          <Typography variant="h5" component="div">
            $53,000
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            <Typography variant="subtitle2" component="span" color="green">
              +55%
            </Typography>{" "}
            since yesterday
          </Typography>
        </CardContent>
        <MonetizationOnIcon sx={{ color: "#5d9f0d", fontSize: "36px" }} />
      </React.Fragment>
    </MuiCard>
  );
}
