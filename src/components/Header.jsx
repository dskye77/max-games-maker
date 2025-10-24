import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ px: { xs: 1, sm: 2 } }}> {/* Responsive padding */}
        {/* Brand / Title */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.75rem" }, // Responsive font size
          }}
        >
          Max Games Maker
        </Typography>

        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" }, // Hide on mobile, show on sm+
            gap: { xs: 1, sm: 2 }, // Responsive gap
            alignItems: "center",
          }}
        >
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }} // Responsive button text
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/docs"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
          >
            Docs
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/legal"
            sx={{ fontSize: { xs: "0.8rem", sm: "0.875rem" } }}
          >
            Legal
          </Button>
        </Box>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "flex", sm: "none" } }} // Show only on mobile
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              minWidth: 150,
            },
          }}
        >
          <MenuItem onClick={handleMenuClose} component={RouterLink} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={RouterLink} to="/docs">
            Docs
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={RouterLink} to="/legal">
            Legal
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}