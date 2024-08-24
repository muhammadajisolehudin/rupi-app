import { createContext, useContext, useState } from "react";
import { useLogin } from "../services/auth/signin";
import { useSignout } from "../services/auth/signout";
import { CookiesKey, CookiesStorage } from "../utils/cookies";
// import { useGetAccountDetail } from "../services/account/account-detail";
// import useLogin from "../services/auth/useLogin";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({});

    const handleNext = (values) => {
        setFormData((prevData) => ({ ...prevData, ...values }));
        setStep((prevStep) => prevStep + 1);

    };

    const [user, setUser] = useState(CookiesStorage?.get(CookiesKey.User));
    
    const [account, setAccount] = useState([])

    const loginMutation = useLogin();

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
            account,
            setAccount,
            ...loginMutation,
            isLoadingSignout,
            isErrorSignout,
            errorSignout,
            step,
            setStep,
            formData,
            handleNext
        }}
    >
        {children}
    </AuthContext.Provider>
};
