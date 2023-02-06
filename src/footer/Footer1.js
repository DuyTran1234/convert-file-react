import { Box } from "@mui/system";
import { iconSocialList } from "../shared/iconSocialList";

export default function Footer1() {
    return <Box
        sx={{
            margin: 0,
            paddingLeft: '35px',
            height: '80px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}
    >
        {iconSocialList.map((icon) => icon)}
    </Box>
}