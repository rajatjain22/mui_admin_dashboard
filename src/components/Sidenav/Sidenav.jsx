import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MuiListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MuiListItemText from "@mui/material/ListItemText";
import {
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import { Menu, MoveToInbox, Mail, MenuOpen, Close } from "@mui/icons-material";
import PropTypes from "prop-types";

const drawerWidth = 256;
const appDrawerHeight = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "transparent",
  ...(open && {
    padding: 20,
    paddingRight: 0,
    visibility: "visible !important",
    boxShadow: "unset",
  }),
});

const closedMixin = (theme, open) => {
  return {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    background: "transparent",
    border: 0,
    width: 0,
    padding: 20,
    paddingRight: 0,
    ...(!open && {
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
      [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(7)} + 35px)`,
      },
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
      },
    }),
    ...(open && {
      width: drawerWidth,
    }),
  };
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 0,
  height: appDrawerHeight,
  backgroundColor: "#574476",
  // backgroundColor: "#4b78bc",
  transition: theme.transitions.create(["width", "padding"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: `calc(${theme.spacing(7)} + 35px)`,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: drawerWidth,
    },
  }),
  ...(open && {
    paddingLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  }),
  "& .MuiButtonBase-root": {
    margin: 0,
  },
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...theme,
  width: drawerWidth,
  flexShrink: 0,
  height: "100vh",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  // visibility: "visible",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme, open),
    "& .MuiDrawer-paper": closedMixin(theme, open),
  }),
}));

const ListItemText = styled(MuiListItemText, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  opacity: 0,
  ...(!open && {
    [theme.breakpoints.up("md")]: {
      opacity: 1,
    },
  }),
  ...(open && {
    opacity: 1,
  }),
}));

const ListItem = styled(MuiListItem)(({ theme }) => ({
  display: "block",
  borderBottomRightRadius: 24,
  borderTopRightRadius: 24,
  transition: theme.transitions.create(["backgroundColor", "transform"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    backgroundColor: "#574476",
    // transform: "scale(1.3)",
  },
}));

const DrawerList = ({ open, handleDrawerOpen }) => (
  <Box
    sx={{
      height: "100%",
      borderRadius: "10px",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
      backgroundColor: "white",
    }}
  >
    <DrawerHeader>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {open ? <Close /> : <Menu />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : { md: 3 },
                justifyContent: "center",
              }}
            >
              {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} open={open} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default function Sidenav({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen((presVal) => !presVal);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              display: { xs: "block", md: "none" },
            }}
          >
            {open ? <MenuOpen /> : <Menu />}
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ display: { xs: "none", sm: "block" } }}
        variant="permanent"
        open={open}
      >
        <DrawerList open={open} handleDrawerOpen={handleDrawerOpen} />
      </Drawer>

      <Drawer
        className={open && "backDrop"}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        open={open}
        sx={{ display: { xs: "block", sm: "none" } }}
        onClose={handleDrawerOpen}
      >
        <DrawerList open={open} handleDrawerOpen={handleDrawerOpen} />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box
          component="main"
          sx={{
            zIndex: 2,
            position: "relative",
            // backgroundColor: "white",
            // p: 1,
            // borderRadius: 2,
            // boxShadow:
            //   "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

DrawerList.propTypes = {
  open: PropTypes.bool.isRequired,
};
