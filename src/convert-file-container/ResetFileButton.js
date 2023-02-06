import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { Button } from "@mui/material";
import React from "react";
import { AppContext } from "../app-context/AppContext";
import { convertFileTypeList } from "../shared/convertTypeList";


export default function ResetFileButton() {
    const { setFilesUpload } = React.useContext(AppContext);
    const { convertFileType, setConvertFileType } = React.useContext(AppContext);
    const { setErrorMsg } = React.useContext(AppContext);
    const { setConvertFiles } = React.useContext(AppContext);

    const handleClickReset = () => {
        setFilesUpload(null);
        setErrorMsg(null);
        setConvertFileType(convertFileTypeList.get(convertFileType.type));
        setConvertFiles(null);
    }

    return <Button
        onClick={handleClickReset}
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
        <RotateLeftIcon />
    </Button>
}