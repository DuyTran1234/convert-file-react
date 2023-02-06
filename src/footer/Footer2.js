import { Box, Link, Typography } from "@mui/material";
import { Color } from "../color/color";
import { listLinkFooter } from "../shared/listLinkFooter";

export default function Footer2() {
    return <Box
        maxWidth={'100%'}
        sx={{
            backgroundColor: Color.backgroundFooter,
            margin: 0,
            paddingLeft: 1,
            height: {
                xs: '250px',
                sm: '80px',
                lg: '80px',
            },
            display: 'flex',
            flexDirection: {
                xs: 'column-reverse',
                sm: 'column-reverse',
                lg: 'row',
            },
            justifyContent: {
                xs: 'space-evenly',
                sm: 'space-evenly',
                lg: 'space-between',
            },
            alignItems: 'center',
        }}
    >
        <Typography>
            © 2023 CvPDF — Made with love for the people of the internet.
        </Typography>
        <Box
            sx={{
                width: { xs: '100%', lg: 'inherit' },
                height: { xs: '65%', lg: 'inherit' },
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'row',
                    lg: 'row',
                },
                justifyContent: {
                    xs: 'space-around',
                    sm: 'center',
                    lg: 'center',
                },
                alignItems: {
                    lg: 'center',
                },
            }}
        >
            {listLinkFooter.map((item) => {
                return <Link
                    href={item.link}
                    marginRight={'20px'}
                >
                    {item.content}
                </Link>
            })}
        </Box>
    </Box>
}