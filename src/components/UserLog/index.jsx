import '../UserLog/userLog.css';
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const UserLog = () => {

    // Context

    const {user, logout} = useUser();

    // Functions

    function handleLogs() {
        if(user?.isLoggedIn) {
            logout();
        }
    }

    return(
        <>
            {
                user?.isLoggedIn ?
                <button onClick={handleLogs} className="logoutButton">
                    Log out
                </button>
                :
                <Link to="/login">
                    <button className="loginButton">
                        Log in
                    </button>
                </Link>
                
            }
        </>
    )
}

export default UserLog;