import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const UserContext = createContext({user: null, isLoggedIn: false});

const UserContextProvider = ({children}) => {

    // States

    const [user, setUser] = useState(null);

    // Functions

    // Establishes a new user and saves its information to local storage
    function login(userData) {
        setUser(userData);
        const userJson = JSON.stringify(userData);
        localStorage.setItem("user", userJson);
    }

    // Deletes all user information
    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    // Retrieves user information from local storage
    function retrieveUserFromLocalstorage() {
        const retrieveUser = JSON.parse(localStorage.getItem("user"));

        if(retrieveUser != null) {
            const oldUser = {
                name: retrieveUser.name,
                email: retrieveUser.email,
                isLoggedIn: true
            };

            login(oldUser);
        }
    }

    // Use Effects

    useEffect(() => {
        retrieveUserFromLocalstorage();
    }, []);

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

export const useUser = () => useContext(UserContext);