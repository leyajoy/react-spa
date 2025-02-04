import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<button
			className='App'
			onClick={() => loginWithRedirect()}
		>
			Sign In
		</button>
	);
};

export default LoginButton;
