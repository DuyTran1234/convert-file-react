import { Box } from "@mui/system";
import React from "react";
import { AppContext } from "../app-context/AppContext";
import ButtonUploadFile from "./ButtonUploadFile";
import ConvertFileButton from "./ConvertFileButton";
import ConvertFileList from "./ConvertFileList";
import ErrorMessageUpload from "./ErrorMessageUpload";
import IconFileUpload from "./IconFileUpload";
import IconLoadingConvert from "./IconLoadingConvert";
import ListFileUpload from "./ListFileUpload";
import ResetFileButton from "./ResetFileButton";

export default function ConvertFileBox() {
    const { convertFileType } = React.useContext(AppContext);
    const { filesUpload } = React.useContext(AppContext);
    const { errorMsg } = React.useContext(AppContext);
    const { loading } = React.useContext(AppContext);
    const { convertFiles } = React.useContext(AppContext);
    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: {
                xs: "90vw",
                sm: "75vw",
                lg: "75vw",
            },
            height: {
                xs: "45vh",
                sm: "40vh",
                lg: "60vh",
            },
            backgroundColor: convertFileType?.backgroundColor,
            border: 'dashed',
            borderColor: convertFileType?.borderColor,
            borderRadius: '20px',
            borderWidth: '5px'
        }}
    >
        {(filesUpload || convertFiles) ? null : <IconFileUpload />}
        {loading ? <IconLoadingConvert /> : null}
        {(!filesUpload && errorMsg === null && !loading && !convertFiles) ? <ButtonUploadFile /> : null}
        {errorMsg ? <ErrorMessageUpload /> : null}
        {(filesUpload && errorMsg === null && !loading) ? <ListFileUpload /> : null}
        {convertFiles ? <ConvertFileList /> : null}
        {(filesUpload || errorMsg || convertFiles) && !loading ? <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: {
                    xs: '50vw',
                    sm: '24vw',
                    lg: '12vw',
                },
            }}
        >
            <ResetFileButton />
            {filesUpload ? <ConvertFileButton /> : null}
        </Box> : null}
    </Box>
}