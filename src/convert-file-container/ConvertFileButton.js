import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button } from "@mui/material";
import React from "react";
import { convertFileApi } from "../api/convert-file-api";
import { AppContext } from "../app-context/AppContext";

export default function ConvertFileButton() {
    const { convertFileType, } = React.useContext(AppContext);
    const { filesUpload, setFilesUpload } = React.useContext(AppContext);
    const { setErrorMsg } = React.useContext(AppContext);
    const { setLoading } = React.useContext(AppContext);
    const { setConvertFiles } = React.useContext(AppContext);

    const handleClickConvert = async () => {
        setErrorMsg(null);
        setLoading(true);
        const convertFilesResponse = await convertFileApi(filesUpload, convertFileType.type);
        if (convertFilesResponse?.status === 201 || convertFilesResponse?.status === 200) {
            setLoading(false);
            setFilesUpload(null);
            setConvertFiles(convertFilesResponse.data);
        }
        else {
            setErrorMsg("An error occurred while converting files");
            setLoading(false);
        }
    }
    return <Button
        onClick={handleClickConvert}
        component="label"
        variant="contained"
        sx={{
            mt: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            width: {
                xs: "4vw",
                sm: "4vw",
                lg: "4vw",
            },
            height: {
                xs: "6vh",
                sm: "4vh",
                lg: "6vh",
            },
        }}
    >
        <KeyboardDoubleArrowRightIcon />
    </Button>
}