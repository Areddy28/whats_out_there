import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import googleLogin from "../images/googleLogin.png";

// for logic: if there is a user render this, otherwise render that
export default function GoogleAuth() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {!user ? (
                <img src={googleLogin} onClick={() => {
                    signInWithGoogle()
                }} />
            ) : (
                <button onClick={() => { signOut() }}>Sign Out</button>
            )}
            <p>Welcome: {user?.displayName}</p>
            {/* <p>{JSON.stringify(user, null, 2)}</p> */}

        </div>
    )


}