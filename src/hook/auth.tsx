import React, { createContext, ReactNode, useContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';

const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env

interface User {
    name: string,
    email: string,
    photo?: string,
}

interface Node {
    children: ReactNode
}

interface ContextData {
    user: User
    signinGoogle(): Promise<void>
    handleSigout(): void
}

interface AuthGoogle {
    params: {
        access_token: string;
    }
    type: string
}

const AuthContext = createContext({} as ContextData)


function AuthProvider({ children }: Node) {
    const [user, setUser] = useState({} as User);

    function handleSigout() {
        setUser({} as User)
    }

    async function signinGoogle() {

        try {
            const REPONSE_TYPE = 'token'
            const ESCOPE = encodeURI('profile email')
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${REPONSE_TYPE}&scope=${ESCOPE}`

            const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthGoogle

            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token} `)
                const useInfo = await response.json()
                console.log(JSON.stringify(useInfo, null, 2));
                const user = {
                    name: useInfo.name,
                    email: useInfo.email,
                    photo: useInfo.picture,
                }
                setUser(user)
            }

        } catch (error) {

        }
    }

    return (
        <AuthContext.Provider value={{ user, signinGoogle, handleSigout }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export { AuthProvider, useAuth }