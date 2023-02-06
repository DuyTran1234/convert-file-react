import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { AppContext } from "../../app-context/AppContext";
import { Color } from "../../color/color";

export default function NavMenuXs(props) {
    const { anchorElNav, setAnchorElNav } = React.useContext(AppContext);

    const pages = props.pages
    const handleOpenNavMenu = props.handleOpenNavMenu;
    const handleCloseNavMenu = props.handleCloseNavMenu;

    return <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color={Color.navMenuColor}
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
            {pages.map((page, index) => (
                <MenuItem key={`NavMenuXsMenuItem ${index}`} onClick={handleCloseNavMenu}>
                    {page.icon}
                    <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
}