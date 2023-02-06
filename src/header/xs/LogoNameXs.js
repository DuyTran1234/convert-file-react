import { Typography } from "@mui/material";
import { Color } from "../../color/color";

export default function LogoNameXs(props) {
    return <Typography
        variant="h6"
        noWrap
        component="a"
        href=""
        sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: `${Color.textColor}`,
            textDecoration: 'none',
        }}
    >
        {props.logoName}
    </Typography>
} 