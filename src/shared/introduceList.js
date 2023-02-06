import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const fontSize = {
    fontSize: '40px',
}
export const introduceList = [
    {
        icon: <TipsAndUpdatesOutlinedIcon sx={fontSize} />,
        caption: 'Quick Conversion Without Email',
        sub: 'With just a simple drag and drop, convert a PDF to Microsoft Word format in seconds. Free to use—no watermarks and no email registration required.'
    },
    {
        icon: <WorkspacePremiumOutlinedIcon sx={fontSize} />,
        caption: 'Safe Document Processing',
        sub: 'We care about file privacy. All files will be deleted from our servers after one hour. Learn more about the privacy of your documents here.'
    },
    {
        icon: <ThumbUpOutlinedIcon sx={fontSize} />,
        caption: 'Convert on Any Operating System',
        sub: 'Our PDF converter works on all computers and operating systems including Mac, Windows, and Linux.'
    },
    {
        icon: <LockOutlinedIcon sx={fontSize} />,
        caption: 'File Conversion Without Losing Quality',
        sub: 'Converting a PDF to a Microsoft Word document can be tricky. To bring you the best quality.'
    },
    {
        icon: <CloudUploadOutlinedIcon sx={fontSize} />,
        caption: 'Online Conversion of Large Files',
        sub: 'Convert your PDF files to Word easily, regardless of size. Our servers are cloud based, making our online converter perfect for larger files.'
    },
];