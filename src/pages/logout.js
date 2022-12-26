import { logout } from "../api/auth";
import { useEffect } from "react";

function Logout() {
    useEffect(() => {
        const logoutUser = async () => {
            await logout();
            window.location.href = "/"
        }
        logoutUser();
    }, []);
    return <div></div>
}

export default Logout;