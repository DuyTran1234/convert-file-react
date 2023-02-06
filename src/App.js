import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AppContext } from "./app-context/AppContext";
import HomePage from "./home-page/HomePage";
import { convertFileTypeList } from "./shared/convertTypeList";

function App() {
	const [anchorElNav, setAnchorElNav] = React.useState('');
	const [anchorElUser, setAnchorElUser] = React.useState('');
	const [convertFileType, setConvertFileType] = React.useState(convertFileTypeList.get(1));
	const [filesUpload, setFilesUpload] = React.useState(null);
	const [errorMsg, setErrorMsg] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [convertFiles, setConvertFiles] = React.useState(null);

	const stateStorage = {
		anchorElNav, setAnchorElNav,
		anchorElUser, setAnchorElUser,
		convertFileType, setConvertFileType,
		filesUpload, setFilesUpload,
		errorMsg, setErrorMsg,
		loading, setLoading,
		convertFiles, setConvertFiles,
	};

	return (
		<AppContext.Provider value={stateStorage} >
			<HomePage />
		</AppContext.Provider>
	);
}

export default App;
