import { Typography } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Hidden } from "@mui/material";

const Upcoming = () => {
  return (
    <Container
      maxWidth={false}
      fullWidth
      disableGutters
      //   sx={{ height: "100vh" }}
    >
      <Typography
        fullWidth
        id="fullWidth"
        sx={{
          my: 10,
          py: 10,
          backgroundColor: "#fff",
          fontSize: {
            xs: "1.5rem",
            sm: "1.5rem",
            md: "2rem",
            lg: "2rem",
            xl: "2rem",
          },
        }}
      >
        Upcoming Events
      </Typography>
    </Container>
  );
};

export default Upcoming;
