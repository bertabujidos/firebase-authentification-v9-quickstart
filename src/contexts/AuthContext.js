import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentuser] = useState()
    
    function signup(email, password) {
        return auth.c(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentuser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }

        return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        )
}
