import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ height: "3rem", justifyContent: "center" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontSize: "15px", flexGrow: 1 }}
        >
          logo - first
        </Typography>
        <Box variant="h6" component="div">
          <ul style={{ listStyle: "none", display: "flex" }}>
            <li style={{ marginRight: "10px", fontSize: "15px" }}>Home</li>
            <li style={{ marginRight: "10px", fontSize: "15px" }}>Contacts</li>
            <li style={{ marginRight: "10px", fontSize: "15px" }}>About</li>
          </ul>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
