import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
	const { user } = useAuth0();
	return (
		<article>
			{user?.picture && (
				<img
					src={user.picture}
					alt=''
				/>
			)}
			<h2>{user?.name}</h2>
			<ul>
				{Object.keys(user).map((objKey, i) => (
					<li key={i}>
						{objKey}:{user[objKey]}
					</li>
				))}
			</ul>
		</article>
	);
};

export default Profile;
