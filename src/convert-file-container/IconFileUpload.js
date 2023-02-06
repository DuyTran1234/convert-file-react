import { Box } from "@mui/system";
import React from "react";
import { AppContext } from "../app-context/AppContext";

export default function IconFileUpload() {
    const { convertFileType } = React.useContext(AppContext);
    const { filesUpload } = React.useContext(AppContext);
    return convertFileType?.iconImg ? <Box
        component="img"
        sx={{
            display: {
                xs: 'flex',
                sm: 'flex'
            },
            height: 100,
            width: 100,
            marginTop: {
                xs: filesUpload ? -2 : "-8vh",
                sm: filesUpload ? -2 : "-8vh",
                lg: filesUpload ? -2 : "-10vh",
            },
            marginBottom: 4,
        }}
        alt="Icon documents"
        src={convertFileType.iconImg}
    /> : null;
}