
import { useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { AuthLayout } from "../../authLayout";
import { InputUsernamePage } from "./InputUsernamePage";
import { SetPasswordPage } from "./SetPasswordPage";
import { VerifyOtpPage } from "./VerifyOtpPage";

export const ForgotPasswordPage = () => {
   const { step, setStep, handleNext } = useAuthContext()

   useEffect(()=>{
        setStep(1)
   }, [])

    return (
        <AuthLayout>
            <>
                {step === 1 && <InputUsernamePage onNext={handleNext} />}
                {step === 2 && <VerifyOtpPage onNext={handleNext} />}
                {step === 3 && <SetPasswordPage />}
            </>
        </AuthLayout>
    );
};

