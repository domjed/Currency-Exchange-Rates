import React, { useState } from "react";

import { Link } from "react-router-dom";
import { grey } from '@mui/material/colors';
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material/";

import {
  APP_TITTLE,
  SIDE_BAR_AUXILIARY_LIST,
  SIDE_BAR_MAIN_LIST, DRAWER_WIDTH
} from "@shared/Constants";
import { AppBar } from "./components/AppBar";
import { AppContainer } from "./components/AppContainer";
import { DrawerHeader } from "./components/DrawerHeader";
import { MainApp } from "./components/MainApp";
import PageRoutes from "../pageRoutes/PageRoutes";

export default function Main() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppContainer>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {APP_TITTLE}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            backgroundColor: grey[200],
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {SIDE_BAR_MAIN_LIST.map((item, index) => (
            <ListItem
              key={index + item.title}
              disablePadding
              button
              component={Link}
              to={item.link}>
              <ListItemIcon>{item.element}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {SIDE_BAR_AUXILIARY_LIST.map((item) => (
            <ListItem
              key={item.title + item.link}
              disablePadding
              button
              component={Link}
              to={item.link}>
              <ListItemIcon>
                <ContactMailRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <DrawerHeader />
      <MainApp open={open}>
        <PageRoutes />
      </MainApp>
    </AppContainer >
  );
}
