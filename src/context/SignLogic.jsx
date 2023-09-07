import React, { useState } from 'react';
export const SignLogic = React.createContext()

const SignProvider = ({ children }) => {
    const isSignIn = true
    return (
        <SignLogic.Provider value={{isSignIn}}>
            {children}
        </SignLogic.Provider>
    )
}
export default SignProvider