import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import path from 'path-browserify';
import React from "react";
import { downloadConvertFileApi } from "../api/convert-file-api";
import { AppContext } from "../app-context/AppContext";
import { Color } from "../color/color";

export default function ConvertFileList() {
    const { convertFiles } = React.useContext(AppContext);

    return <Box
        sx={{
            height: "70%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        }}
    >
        {convertFiles.map((file, index) => {
            return <Button
                target={"_blank"}
                download
                href={downloadConvertFileApi(file.userId, file.convertFileName)}
                key={`ButtonConvertFileDownload${index}`}
                variant="contained"
                style={{
                    backgroundColor: Color.buttonConvertFileList,
                }}
                sx={{
                    justifyContent: 'revert',
                    textTransform: 'none',
                    borderRadius: '15px',
                    width: {
                        xs: "50vw",
                        sm: "35vw",
                        lg: "20vw",
                    },
                    height: {
                        xs: "4vh",
                        sm: "4vh",
                        lg: "5vh",
                    },
                }}
            >
                <BrowserUpdatedIcon sx={{ color: 'black', mr: 1 }} />
                <Typography
                    fontWeight={400}
                    sx={{
                        color: 'black',
                        fontSize: {
                            xs: "12px",
                            sm: "16px",
                            lg: "16px",
                        }
                    }}
                >
                    {changeConvertFileName(file.convertFileName)}
                </Typography>
            </Button>
        })}
    </Box>
}

function changeConvertFileName(convertFileName) {
    const fileName = convertFileName.slice(4);
    const newName = path.parse(fileName).name;
    const extName = path.parse(fileName).ext;
    const bound = 10;
    if (newName.length <= bound) { return fileName; }
    return `${newName.slice(0, bound - 1)}(...)${extName}`;
}