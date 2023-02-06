import { Box } from "@mui/system";
import { pathImage } from "../path-image/pathImage";


export default function IconLoadingConvert() {
    return <Box
        component="img"
        sx={{
            height: 80,
            width: 80,
        }}
        alt="Loading gif"
        src={pathImage.cloudLoadingGif}
    />
}