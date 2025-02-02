import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const UserContext = createContext({user: null, isLoggedIn: false});

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    function login(userData) {
        setUser(userData);

        const userJson = JSON.stringify(userData);
        localStorage.setItem("user", userJson);
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

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