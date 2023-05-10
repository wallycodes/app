import { Typography } from "@mui/material";
import * as React from "react";
import axios from "axios";
import { useEffect } from "react";
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
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const [jsonResults, setJsonResults] = useState([]);
  const [artistNames, setArtistNames] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    axios
      .get(
        "https://edmtrain.com/api/events?latitude=39.7392&longitude=-104.990&state=Colorado&client=5edf33ab-30d0-4fb8-b8d9-1052d54efc81"
      )
      .then((res) => {
        setJsonResults(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container
      maxWidth={false}
      fullWidth
      disableGutters
      sx={{ height: "100vh", backgroundColor: "#fff" }}
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
      {jsonResults.map((art) => {
        return (
          <div>
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Item>
                  <Typography>{art.name}</Typography>
                  {art.artistList.map((artistList) => (
                    <Typography>{artistList.name}</Typography>
                  ))}
                  <Typography>{art.venue.name}</Typography>
                </Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>
                  <Link to={art.link}>
                    <Button>Buy Tickets</Button>
                  </Link>
                </Item>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </Container>
  );
};

export default Upcoming;
