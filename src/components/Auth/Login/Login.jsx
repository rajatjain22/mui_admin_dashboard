import Grid from "@mui/material/Grid";
import LoginForm from "./LoginForm";
import { Card } from "@mui/material";

export default function Login() {
  return (
    <Grid container component="article" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={5} component="figure" elevation={6} square>
        <LoginForm />
      </Grid>
      <Grid
        component="figure"
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(./login/Rectangle.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <Card>%Rajayt khaiodfshfdo</Card>
      </Grid>
    </Grid>
  );
}
