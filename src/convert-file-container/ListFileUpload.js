import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import path from "path-browserify";
import React from "react";
import { AppContext } from "../app-context/AppContext";

export default function ListFileUpload() {
    const { filesUpload } = React.useContext(AppContext);
    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {Array.from(filesUpload).map((item, index) => {
            return <Typography
                key={`fileListUpload${index}`}
            >
                {sliceFileName(item.name)}
            </Typography>
        })}
    </Box>
}

function sliceFileName(fileName) {
    const newName = path.parse(fileName).name;
    const extName = path.parse(fileName).ext;
    const bound = 10;
    if (newName.length <= bound) { return fileName; }

    return `${newName.slice(0, bound - 1)}${extName}`;
}