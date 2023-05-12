import * as React from "react";
import { Link } from "react-router-dom";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";

// const pages = ["Festivals", "Videos"];
// const pages2 = ["Festivals", "My events", "Login"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // LOGIN ONCLICK
  const [openLogin, setOpenLogin] = React.useState(false);

  const handleLoginOpen = () => {
    setOpenLogin(!openLogin);
    handleCloseNavMenu();
  };
  // STATE FOR MODAL MENU BREAKPOINT
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;

  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 5,
              mr: 6,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 800,
              letterSpacing: ".01rem",
              color: "#000",
              textDecoration: "none",
            }}
          >
            Headbangers
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {width > breakpoint ? (
                pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))
              ) : ( */}
              <div>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/MyEvents"
                  >
                    My Events
                  </Link>
                </MenuItem>
                {/* <MenuItem onClick={handleCloseNavMenu}>My events</MenuItem> */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to="/Videos"
                  >
                    Videos
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleLoginOpen}>Login</MenuItem>
              </div>
              {/* )} */}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 800,
              letterSpacing: ".01rem",
              color: "#000",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              Headbangers
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button onClick={handleCloseNavMenu}>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                sx={{
                  ml: 4,
                  my: 2,
                  color: "#000",
                  display: "block",
                  fontFamily: "roboto",
                  fontWeight: 400,
                  letterSpacing: ".01rem",
                  textDecoration: "none",
                }}
                to="/MyEvents"
              >
                My Events
              </Link>
            </Button>
            <Button onClick={handleCloseNavMenu}>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                sx={{
                  ml: 4,
                  my: 2,
                  color: "#000",
                  display: "block",
                  fontFamily: "roboto",
                  fontWeight: 400,
                  letterSpacing: ".01rem",
                  textDecoration: "none",
                }}
                to="/Videos"
              >
                Videos
              </Link>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <Button
                  onClick={handleLoginOpen}
                  variant="contained"
                  size="large"
                  style={{ backgroundColor: "#000", borderRadius: "50px" }}
                  sx={{
                    display: { xs: "none", md: "block" },
                    mx: 5,
                  }}
                >
                  Login
                </Button>
                {/* LOGIN FORM */}
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
                        Login
                      </Typography>
                      <Box
                        component="form"
                        //   onSubmit=
                        noValidate
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox value="remember" color="primary" />
                          }
                          label="Remember me"
                        />
                        <Button
                          onClick={handleLoginOpen}
                          //   type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2, backgroundColor: "#fc00ff" }}
                        >
                          Sign In
                        </Button>
                        <Grid container>
                          <Grid item xs>
                            <Link href="#" variant="body2">
                              Forgot password?
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link href="#" variant="body2">
                              {"Don't have an account? Sign Up"}
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    {/* <Button onClick={handleLoginOpen}>Cancel</Button>
                    <Button onClick={handleLoginOpen}>Ok</Button> */}
                  </DialogActions>
                </Dialog>
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > */}
            {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            {/* </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
