import { Box, Button } from "@mui/material";
import { Color } from "../../color/color";



export default function NavMenuMd(props) {
    const pages = props.pages;
    const handleCloseNavMenu = props.handleCloseNavMenu;

    return <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page, index) => (
            <Button 
                key={`NavMenuMdKey ${index}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: `${Color.textColor}`, display: 'flex', mr: 4 }}
            >
                {page.icon}
                {page.name}
            </Button>
        ))}
    </Box>
}