import { Container } from "@mui/system";
import React from "react";
import ConvertFileBox from "./ConvertFileBox";
import ConvertTypeInput from "./ConvertTypeInput";

export default function ConvertFileContainer() {
    return (
        <Container
            maxWidth='100%'
            style={{
                padding: 0,
            }}
            sx={{
                mt: 9,
                backgroundColor: "#ffffff",
                height: {
                    xs: "75vh",
                    sm: "65vh",
                    lg: "80vh",
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }}
        >
            <ConvertTypeInput />
            <ConvertFileBox />
        </Container>
    );
}