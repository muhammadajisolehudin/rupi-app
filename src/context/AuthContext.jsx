import { createContext, useContext, useState } from "react";
import { useLogin } from "../services/auth/signin";
import { useSignout } from "../services/auth/signout";
import { CookiesKey, CookiesStorage } from "../utils/cookies";
// import { useGetAccountDetail } from "../services/account/account-detail";
// import useLogin from "../services/auth/useLogin";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(CookiesStorage?.get(CookiesKey.User));
    

    const loginMutation = useLogin();
    
    // const { data : dataAccount, isLoading : isLoadingAccount, isError: isErrorAccount , error : errorAccount } = useGetAccountDetail();


    const { mutate: logoutMutation, isLoading: isLoadingSignout, IsError: isErrorSignout, error:errorSignout  } = useSignout();

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

    return <AuthContext.Provider
        value={{
            login,
            user,
            logout,
            // Login mutation related values
            ...loginMutation,
            // Account detail related values
            // dataAccount,
            // isLoadingAccount,
            // isErrorAccount,
            // errorAccount,
            // Signout mutation related values
            isLoadingSignout,
            isErrorSignout,
            errorSignout,
        }}
    >
        {children}
    </AuthContext.Provider>
};
