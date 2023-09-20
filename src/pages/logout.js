import { logout } from "../api/auth";
import { useEffect } from "react";

import { useAuth } from "../contexts/auth.context";
function Logout() {
    const { setCurrentUser } = useAuth();
    
    useEffect(() => {
        const logoutUser = async () => {
            await logout();
            setCurrentUser(null)
            window.location.href = "/"
        }
        logoutUser();
    }, []);
    return <div></div>
}

export default Logout;