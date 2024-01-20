import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null);


    const login = () => {
        // Gonna take it from api
        setCurrentUser(
            {
                id: 1,
                name: "Amit",
                profilePic:
                    "https://media.licdn.com/dms/image/C5603AQEObzx4HbnwHQ/profile-displayphoto-shrink_800_800/0/1626455762801?e=1710979200&v=beta&t=GHxhaUh9v-GK-LUGNuOAbOUMW_oKrZ-BZY7DFJFet2g"
            }
        );
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))

    }, [currentUser])

    return <AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>
}