import { Typography } from "@mui/material";
import React from "react";
import { AppContext } from "../app-context/AppContext";

export default function ErrorMessageUpload() {
    const { errorMsg } = React.useContext(AppContext);
    return errorMsg ? <Typography variant="h5" color="red" >
        {errorMsg}
    </Typography> : null;
}