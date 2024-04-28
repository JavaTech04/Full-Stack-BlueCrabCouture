import { createContext, useState } from "react";

export const FullNameContext = createContext()

export const FullNameProvider = ({ children }) => {
    const [fullName, setFullName] = useState()
    const handleChange = (e) => {
        setFullName(e.target.value)
    }
    const value = { fullName, handleChange }
    return (
        <FullNameContext.Provider value={value}>
            {children}
        </FullNameContext.Provider>
    )
}