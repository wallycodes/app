import * as React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
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
import FormControlLabel from "@mui/material/FormControlLabel";

function MyEvents(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [openLogin, setOpenLogin] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLoginOpen = () => {
    setOpenLogin(!openLogin);
    handleCloseNavMenu();
  };

  // SETTING UP STATE TO HANDLE EVENTS
  const [eventEdm, setEventEdm] = useState({
    eventName: "",
    eventVenue: "",
    eventLocation: "",
    eventArtist: "",
    eventDate: "",
    deleteEvent: false,
  });

  const [errors, setErrors] = useState({});

  // CHANGE HANDLER
  const changeHandler = (e) => {
    setEventEdm({ ...eventEdm, [e.target.name]: e.target.value });
  };
  // SUBMIT HANDLER NEW EVENT
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/events/new", eventEdm)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };

  // GET REQUEST TO DISPLAY EVENTS
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allEvents")
      .then((response) => {
        console.log(response.data);
        setEventList(response.data.Events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Title />
      <Container
        maxWidth={false}
        fullWidth
        disableGutters
        sx={{ height: "100vh", backgroundColor: "#fff" }}
      >
        <Typography
          fullWidth
          align="center"
          id="fullWidth"
          sx={{
            mt: 10,
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
          My Planned Events
        </Typography>
        <Container align="center" maxWidth="xl" fullWidth disableGutters>
          <Link align="center" onClick={handleLoginOpen}>
            <Button
              size="large"
              sx={{ color: "#fff", backgroundColor: "#fc00ff" }}
            >
              Add Event
            </Button>
          </Link>

          <Dialog
            open={openLogin}
            onClose={handleLoginOpen}
            disableEscapeKeyDown
          >
            <DialogContent>
              <Box
                sx={{
                  marginTop: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Add Event
                </Typography>
                <Box
                  component="form"
                  onSubmit={submitHandler}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    onChange={changeHandler}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="event Name"
                    name="eventName"
                    autoFocus
                  />
                  <TextField
                    onChange={changeHandler}
                    margin="normal"
                    required
                    fullWidth
                    name="eventVenue"
                    label="venue"
                    id="venue"
                  />
                  <TextField
                    onChange={changeHandler}
                    margin="normal"
                    required
                    fullWidth
                    name="eventLocation"
                    label="City, State ex. (Denver,CO)"
                    id="location"
                  />
                  <TextField
                    onChange={changeHandler}
                    margin="normal"
                    required
                    fullWidth
                    name="eventArtist"
                    label="artist"
                    id="artist"
                  />
                  <TextField
                    onChange={changeHandler}
                    margin="normal"
                    required
                    fullWidth
                    name="eventDate"
                    label="date"
                    id="date"
                  />
                  {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  /> */}
                  <Button
                    onClick={handleLoginOpen}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#fc00ff" }}
                  >
                    Submit Event
                  </Button>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              {/* <Button onClick={handleLoginOpen}>Cancel</Button>
                    <Button onClick={handleLoginOpen}>Ok</Button> */}
            </DialogActions>
          </Dialog>
        </Container>

        {/* JSON INFO */}
        {eventList.map((eventEdm) => (
          <Container maxWidth="xl">
            <Grid container spacing={5} sx={{ mt: 2 }}>
              <Grid item xs={8} md={8} sx={{ mb: 5 }}>
                <Item>
                  <Typography
                    align="left"
                    sx={{ fontWeight: "800", fontSize: "20px" }}
                  >
                    {eventEdm.eventName}
                  </Typography>

                  <Typography align="left" sx={{ color: "#fc00ff" }}>
                    {eventEdm.eventDate}
                  </Typography>
                  <Typography align="left" sx={{ mb: 1 }}>
                    {eventEdm.eventLocation}
                  </Typography>

                  <Typography variant="body1" align="left">
                    {eventEdm.eventArtist}
                  </Typography>
                </Item>
              </Grid>
              {/* END OF JSON INFO */}
              <Grid
                item
                xs={4}
                md={4}
                alignItems="center"
                justifyContent="center"
                verticalAlign="center"
              >
                <Link>
                  <Typography variant="subtitle" align="center" sx={{ mx: 2 }}>
                    Edit
                  </Typography>
                </Link>
                <Link>
                  <Typography variant="subtitle" align="center">
                    Delete
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Container>
        ))}
      </Container>
    </div>
  );
}

export default MyEvents;
