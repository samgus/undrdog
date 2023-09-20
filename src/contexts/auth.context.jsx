import React, { useContext, useState, useEffect } from "react"
import { getLoggedInUser } from "../api/auth";

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [fetchedUser, setFetchedUser] = useState(false)
  const [currentUser, setCurrentUser] = useState()
  const [googleClient, setGoogleClient] = useState()

  useEffect(() => {
    const getUserInfo = async () => {
      // slight delay to check if a user exists
      const response = await getLoggedInUser();
       if (response.user) {
        setCurrentUser(response.user);
       }
       setFetchedUser(true);
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    if (window.google) {
      const googleClient = window.google.accounts.oauth2.initCodeClient({
        client_id: '828517644755-ug8shge2b0fct0m4qq8g8fki2772po49.apps.googleusercontent.com',
        ux_mode: 'redirect',
        scope: "email \ profile",
        redirect_uri: "http://localhost:8080/auth-callback",
        state: "REDIRECT_STATE"
      });
      setGoogleClient(googleClient)
    }
  }, [window.google])

  const value = {
    currentUser,
    setCurrentUser,
    fetchedUser,
    googleClient
  }
  if (!fetchedUser) {
    return <div></div>
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}