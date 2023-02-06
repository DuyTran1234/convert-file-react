import { Container } from "@mui/system";
import ConvertFileContainer from "../convert-file-container/ConvertFileContainer";
import Footer from "../footer/Footer";
import Header from "../header/header";
import IntroduceContainer from "../introduce-box/IntroduceContainer";

export default function HomePage() {
    return <Container
        maxWidth={`100%`}
        style={{
            margin: 0,
            padding: 0,
        }}
    >
        <Header />
        <ConvertFileContainer />
        <IntroduceContainer />
        <Footer />
    </Container >
}