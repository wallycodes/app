import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
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

const Title = () => {
  return (
    <Container maxWidth="xl" sx={{ mb: 10 }}>
      <Typography
        id="fullWidth"
        display="flex"
        align="left"
        sx={{
          fontSize: {
            xs: "3rem",
            sm: "4rem",
            md: "5rem",
            lg: "6rem",
            xl: "6rem",
          },
          ml: 5,
          mr: 5,
          mt: 6,
          fontFamily: "roboto",
          fontWeight: 800,
          letterSpacing: ".01rem",
          color: "#000",
          textDecoration: "none",
          overflow: "hidden",
        }}
      >
        EDM.Dance.
        <br />
        Buy Tickets.
      </Typography>
      <form noValidate autoComplete="off">
        <Box sx={{ mx: 5 }}>
          <TextField
            fullWidth
            zeroMinWidth
            id="fullWidth"
            // InputLabelProps={{ shrink: false }}
            shrink="true"
            label="Search by name or city..."
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              mt: 10,
              backgroundColor: "#fff",
              borderRadius: "50px",
              overflow: "hidden",
            }}
          />
        </Box>
      </form>
    </Container>
  );
};

export default Title;
