import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";
import { faFacebook, faLinkedinIn, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const iconSocialList = [
    <Link href="#" sx={{color: 'black', mr: '30px'}}>
        <FontAwesomeIcon fontSize={'24px'} icon={faFacebook} />
    </Link>,
    <Link href="#" sx={{color: 'black', mr: '30px'}}>
        <FontAwesomeIcon fontSize={'24px'} icon={faLinkedinIn} />
    </Link>,
    <Link href="#" sx={{color: 'black', mr: '30px'}}>
        <FontAwesomeIcon fontSize={'24px'} icon={faInstagram} />
    </Link>,
    <Link href="#" sx={{color: 'black', mr: '30px'}}>
        <FontAwesomeIcon fontSize={'24px'} icon={faYoutube} />
    </Link>,
    <Link href="#" sx={{color: 'black', mr: '30px'}}>
        <FontAwesomeIcon fontSize={'24px'} icon={faTwitter} />
    </Link>,
];