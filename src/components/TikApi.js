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


  const [errors, setErrors] = useState({});
 
  // GET REQUEST TO DISPLAY EVENTS
  const { eventList, setEventList } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allEvents")
      .then((response) => {
        setEventList(response.data.events);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  }, []);

  return (

       <div>
        
       </div>
)


export default Display
