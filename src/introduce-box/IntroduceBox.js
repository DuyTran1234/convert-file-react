import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function IntroduceBox(props) {
    const icon = props.icon;
    const caption = props.caption;
    const sub = props.sub;

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: {
                xs: '300px',
                sm: '340px',
            },
            height: '300px',
        }}
    >
        {icon}
        <Typography align="center" fontWeight={700} sx={{ mt: 2 }}>
            {caption}
        </Typography>
        <Typography align="center" sx={{ mt: 2 }}>
            {sub}
        </Typography>
    </Box>
}