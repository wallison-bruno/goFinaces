import React, { createContext, ReactNode, useContext } from "react";

interface User {
    name: string,
    email: string,
    photo?: string,
}

const AuthContext = createContext({} as User)

const user = {
    name: 'Wallison Bruno',
    email: 'wallison@hotmail.com'
}

function AuthProvider(children: ReactNode) {
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export { AuthProvider, useAuth }