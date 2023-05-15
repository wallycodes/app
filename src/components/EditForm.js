import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
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
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditForm = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [eventEdm, setEventEdm] = useState({
    eventName: "",
    eventVenue: "",
    eventLocation: "",
    eventArtist: "",
    eventDate: "",
    deleteEvent: false,
  });

  const changeHandler = (e) => {
    setEventEdm({ ...eventEdm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/events/${id}`)
      .then((res) => {
        setEventEdm(res.data.Event);
        // console.log(res.data.Event);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [errors, setErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/events/${id}/edit`, eventEdm)
      .then((res) => {
        // console.log(res);
        navigate("/MyEvents");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <Container
      sx={{
        height: "100vh",
        backgroundColor: "#fff",
        width: "100vw",
        paddingTop: "25px",
      }}
      align="center"
      maxWidth={false}
      fullWidth
      disableGutters
    >
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit Event
        </Typography>
        <Box
          align="center"
          component="form"
          onSubmit={submitHandler}
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={changeHandler}
            id="outlined-basic"
            fullWidth
            name="eventName"
            label="Event Name"
            variant="outlined"
            // placeholder={eventEdm.eventName}
          />

          <TextField
            onChange={changeHandler}
            margin="normal"
            fullWidth
            name="eventVenue"
            label="venue"
            id="venue"
          />

          <TextField
            onChange={changeHandler}
            margin="normal"
            placeholder={eventEdm.eventLocation}
            fullWidth
            name="eventLocation"
            label="City, State ex. (Denver,CO)"
            id="location"
          />
          <TextField
            onChange={changeHandler}
            margin="normal"
            placeholder={eventEdm.eventArtist}
            fullWidth
            name="eventArtist"
            label="artist"
            id="artist"
          />
          <TextField
            placeholder={eventEdm.eventDate}
            onChange={changeHandler}
            margin="normal"
            fullWidth
            name="eventDate"
            label="date"
            id="date"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#fc00ff" }}
          >
            Submit Event
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditForm;
