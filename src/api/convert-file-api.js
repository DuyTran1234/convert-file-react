import axios from "axios";

const jwtToken = process.env.REACT_APP_JWT_TOKEN;
const serverUrl = process.env.REACT_APP_BACKEND_SERVER;
const urlConvert = `${serverUrl}/convert-file/user-convert`;

export const convertFileApi = async (files, type) => {
    try {
        const formData = new FormData();
        for (let file of files) {
            formData.append('convert-files', file);
        }
        formData.append('type', type);
        const config = {
            method: 'post',
            url: urlConvert,
            headers: {
                'Authorization': `Bearer ${jwtToken}`,
            },
            data: formData
        };
        const rs = await axios(config);
        return rs;
    } catch (error) {
        console.log(error.message);
    }
}

export const downloadConvertFileApi = (userId, convertFileName) => {
    try {
        return `${serverUrl}/convert-file/convert-download/${userId}/${convertFileName}`;
    } catch (error) {
        console.log(error.message);
    }
}