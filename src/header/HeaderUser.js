import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AppContext } from "../app-context/AppContext";

export default function HeaderUser(props) {
    const { anchorElUser, setAnchorElUser } = React.useContext(AppContext);
    const settingsUser = props.settingsUser;

    const handleOpenUserMenu = props.handleOpenUserMenu;
    const handleCloseUserMenu = props.handleCloseUserMenu;

    return <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Duy" src="/static/images/avatar/2.jpg" />
            </IconButton>
        </Tooltip>
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            {settingsUser.map((setting, index) => (
                <MenuItem key={`HeaderUserKey ${index}`} onClick={handleCloseUserMenu}>
                    {setting.icon}
                    <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
}