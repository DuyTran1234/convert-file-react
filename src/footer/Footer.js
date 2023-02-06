import { Container } from "@mui/system";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

export default function Footer() {
    return <Container
        maxWidth={'100%'}
        style={{
            margin: 0,
            padding: 0,
        }}
        sx={{
            borderTop: 1,
        }}
    >
        <Footer1 />
        <Footer2 />
    </Container>
}