import React, { useContext, useState, useEffect } from "react"
import { getLoggedInUser } from "../api/auth";

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const [fetchedUser, setFetchedUser] = useState(false)
  const [currentUser, setCurrentUser] = useState()

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

  const value = {
    currentUser,
    setCurrentUser,
    fetchedUser
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