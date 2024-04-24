"use client"
import React, { useState } from "react";
import Box from "@mui/material/Box";
import styles from "./header.module.css";
import { AppBar, Button, Toolbar, Container, IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.ImgBackground} sx={{ height: 600 }}>
      <AppBar sx={{ background: "transparent", boxShadow: 0 }} position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                gap: 4,
              }}
            >
              <Button sx={{ my: 2, color: "white" }}>About</Button>
              <Button sx={{ my: 2, color: "white" }}>Roadmap</Button>
              <Image src="/Logo.png" alt="logo" height={60} width={230} />
              <Button sx={{ my: 2, color: "white" }}>White Paper</Button>
              <Button sx={{ my: 2, color: "white" }}>Faqs</Button>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                // justifyContent: "center",
                width: "100%",
                // gap: 2,
              }}
            >
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
              <Image src="/Logo.png" alt="logo" height={50} width={200} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Roadmap</MenuItem>
        <MenuItem onClick={handleClose}>White Paper</MenuItem>
        <MenuItem onClick={handleClose}>Faqs</MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
