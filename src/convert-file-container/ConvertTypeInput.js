import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AppContext } from "../app-context/AppContext";
import { convertFileTypeList } from "../shared/convertTypeList";

const convertTypeList = Array.from(convertFileTypeList, function ([key, value]) {
    return {
        name: value.name,
        type: value.type,
        backgroundColor: value.backgroundColorWord,
        borderColor: value.borderColorWord,
    };
});

export default function ConvertTypeInput() {
    const { convertFileType, setConvertFileType } = React.useContext(AppContext);
    const { setFilesUpload } = React.useContext(AppContext);
    const { setErrorMsg } = React.useContext(AppContext);
    const { setLoading } = React.useContext(AppContext);
    const { setConvertFiles } = React.useContext(AppContext);

    const handleChange = (event) => {
        const targetValue = event.target.value;
        const obj = convertFileTypeList.get(targetValue);
        setConvertFileType(obj);
        setFilesUpload(null);
        setErrorMsg(null);
        setLoading(false);
        setConvertFiles(null);
    };

    return <Box sx={{
        width: {
            xs: "60vw",
            sm: "45vw",
            lg: "30vw",
        }
    }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Convert File Type</InputLabel>
            <Select
                sx={{
                    borderRadius: '12px',
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={convertFileType.type}
                label="Convert File Type"
                onChange={handleChange}
            >
                {convertTypeList.map((item, index) => {
                    return <MenuItem
                        key={`ConvertTypeInputKey${index}`}
                        value={item.type}
                    >
                        {item.name}
                    </MenuItem>
                })}
            </Select>
        </FormControl>
    </Box>
}