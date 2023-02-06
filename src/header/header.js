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
import { AppContext } from '../app-context/AppContext';
import LogoNameMd from './md/LogoNameMd';
import NavMenuXs from './xs/NavMenuXs';
import LogoNameXs from './xs/LogoNameXs';
import NavMenuMd from './md/NavMenuMd';
import HeaderUser from './HeaderUser';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Color } from '../color/color';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const pages = [
    { name: 'Home', icon: <HomeIcon sx={{ mr: 1 }} /> },
    { name: 'Tools', icon: <ConstructionIcon sx={{ mr: 1 }} /> },
    { name: 'Documents', icon: <FileCopyIcon sx={{ mr: 1 }} /> },
];
const settingsUser = [
    { name: 'Profile', icon: <AccountCircleIcon sx={{ mr: 2 }} /> },
    { name: 'Logout', icon: <LogoutIcon sx={{ mr: 2 }} /> },
];
const logoName = `CvPDF`;

function Header() {
    const { anchorElNav, setAnchorElNav } = React.useContext(AppContext);
    const { anchorElUser, setAnchorElUser } = React.useContext(AppContext);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const render = <AppBar position="fixed" sx={{ background: Color.backgroundHeaderColor }} >
        <Container maxWidth="xl" >
            <Toolbar disableGutters >
                <NavMenuXs
                    pages={pages}
                    handleOpenNavMenu={handleOpenNavMenu}
                    handleCloseNavMenu={handleCloseNavMenu}
                />

                <AppRegistrationIcon
                    sx={{
                        display: { xs: 'flex', md: 'none' }, mr: 1,
                        color: `${Color.iconLogoColor}`,
                    }}
                />
                <LogoNameXs logoName={logoName} />

                <AppRegistrationIcon
                    sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: `${Color.iconLogoColor}` }}
                />
                <LogoNameMd logoName={logoName} />

                <NavMenuMd pages={pages} handleCloseNavMenu={handleCloseNavMenu} />

                <HeaderUser
                    settingsUser={settingsUser}
                    handleOpenUserMenu={handleOpenUserMenu}
                    handleCloseUserMenu={handleCloseUserMenu}
                />
            </Toolbar>
        </Container>
    </AppBar>

    return render;
}
export default Header;