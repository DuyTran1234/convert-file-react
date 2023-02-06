import { Typography } from "@mui/material";
import { Color } from "../../color/color";

export default function LogoNameMd(props) {
    return <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
            mr: 5,
            display: { xs: 'none', md: 'flex' },
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