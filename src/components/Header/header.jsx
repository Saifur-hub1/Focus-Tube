import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, MenuItem, Menu } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  function handleMenuClick(event) {
    setAnchorEl(event.currentTarget)
  }
  function handleMenuClose() {
    setAnchorEl(null);
  }
  function handleMenuFavorit() {
    
    setAnchorEl(null);
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          FocusTube
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuFavorit}>Favorites</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
