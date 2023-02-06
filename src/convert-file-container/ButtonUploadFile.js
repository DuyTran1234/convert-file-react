import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Button, Typography } from "@mui/material";
import React from "react";
import { AppContext } from "../app-context/AppContext";
import { Color, ConvertBackgroundColor } from "../color/color";
import { pathImage } from "../path-image/pathImage";

export default function ButtonUploadFile() {
    const { setFilesUpload } = React.useContext(AppContext);
    const { convertFileType, setConvertFileType } = React.useContext(AppContext);
    const { setErrorMsg } = React.useContext(AppContext);
    const handleChangeFileUpload = (e) => {
        const fileList = e.target.files;
        if (fileList.length <= 5) {
            setFilesUpload(fileList);
            setConvertFileType((prevState) => {
                return {
                    ...prevState,
                    backgroundColor: ConvertBackgroundColor.backgroundColorNone,
                    borderColor: prevState.backgroundColor,
                }
            })
        }
        else {
            setFilesUpload(null);
            setErrorMsg('Batch processing only applies to no more than 5 files');
            setConvertFileType((prevState) => {
                return {
                    ...prevState,
                    backgroundColor: ConvertBackgroundColor.backgroundColorNone,
                    borderColor: prevState.backgroundColor,
                    iconImg: pathImage.errorImg,
                }
            })
        }
    };
    return <Button
        component="label"
        variant="contained"
        style={{
            backgroundColor: Color.buttonUploadFileColor,
        }}
        sx={{
            borderRadius: '15px',
            width: {
                xs: "50vw",
                sm: "25vw",
                lg: "20vw",
            },
            height: {
                xs: "9.5vh",
                sm: "6.5vh",
                lg: "10vh",
            },
        }}
    >
        <AttachFileIcon sx={{ mr: 1.5, color: 'black' }} />
        <Typography
            fontWeight={500}
            sx={{
                color: 'black',
                fontSize: {
                    xs: "12px",
                    sm: "16px",
                    lg: "16px",
                }
            }}
        >
            Choose Files
        </Typography>
        <input
            hidden
            onChange={handleChangeFileUpload}
            accept={convertFileType.extension}
            multiple
            type="file"
            name="convert-files"
        />
    </Button>
}