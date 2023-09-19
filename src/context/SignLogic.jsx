import React, { useState } from 'react';
export const SignLogic = React.createContext()

const SignProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState('')
    const [username, setUsername] = useState('')
    const logOffUser = () => {
        setIsLogin('')
        setUsername('')
    }
    return (
        <SignLogic.Provider value={{ isLogin, setIsLogin, username, setUsername, logOffUser }}>
            {children}
        </SignLogic.Provider>
    )
}
export default SignProvider