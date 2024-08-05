import { createContext, useContext, useState } from "react";
import { useLogin } from "../services/auth/signin";
import { useSignout } from "../services/auth/signout";
import { CookiesKey, CookiesStorage } from "../utils/cookies";
// import useLogin from "../services/auth/useLogin";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(CookiesStorage?.get(CookiesKey.User));
    

    const loginMutation = useLogin();
    const { mutate: logoutMutation } = useSignout();

    const login = async (input) => {
        try {
            const result = await loginMutation.mutateAsync(input);
            setUser(result.data)
            return result;
            
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    };

    const logout = async () => {
        setUser(null)
        logoutMutation();
    }

    return <AuthContext.Provider value={{ login, user, logout, ...loginMutation }}>{children}</AuthContext.Provider>;
};
