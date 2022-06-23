import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image'

const pages = ['About', 'RoadMap', 'White Paper', 'FAQS'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import styles from './Header.module.css'

const ResponsiveAppBar = () => {
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

    return (
        <Box className={styles.Image} sx={{height: 600}}>
            {/* <Image
                src="/background.webp"
                alt="logo"
                height={50}
                width={220}
            /> */}
            <AppBar position="static" className={styles.Navbar} sx={{ boxShadow: 0 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters  >
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', width: '100%', gap: 4, }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={styles.Button}
                            >
                                About
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={styles.Button}
                            >
                                Roadmap
                            </Button>
                            <Image
                                src="/Logo.png"
                                alt="logo"
                                height={60}
                                width={230}
                            />
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={styles.Button}
                            >
                                White Paper
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                className={styles.Button}
                            >
                                FAQs
                            </Button>

                        </Box>

                        <Box sx={{   display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: "white" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" >{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <Box
                            sx={{

                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <Image
                                src="/Logo.png"
                                alt="logo"
                                height={50}
                                width={220}
                            />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};
export default ResponsiveAppBar;
