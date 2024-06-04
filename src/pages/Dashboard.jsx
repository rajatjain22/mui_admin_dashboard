import { Box, styled } from "@mui/material";
import HomeCard from "../components/HomeCard/HomeCard";

const DashboardCardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  [theme.breakpoints.up("lg")]: {
    flexWrap: "nowrap",
    flexDirection: "row",
  },
}));

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <DashboardCardBox>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </DashboardCardBox>
    </Box>
  );
};

export default Dashboard;
