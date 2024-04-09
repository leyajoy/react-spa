import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton, Profile } from "./components";

function App() {
	const { isAuthenticated, isLoading, error } = useAuth0();
	return (
		<main className='column'>
			<h1>Auth0 POC</h1>
			{error && <p>Authentication Error</p>}
			{!error && isLoading && <p>Loading....</p>}
			{!error && !isLoading && (
				<>
					{!isAuthenticated ? (
						<LoginButton />
					) : (
						<>
							<LogoutButton />
							<Profile />
						</>
					)}
				</>
			)}
		</main>
	);
}

export default App;
