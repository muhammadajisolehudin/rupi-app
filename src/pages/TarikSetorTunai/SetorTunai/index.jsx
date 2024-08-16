import { useState, useEffect } from "react";
import { SetorTunaiForm } from "./SetorTunaiForm";
import { KonfirmasiForm } from "./KonfirmasiForm";
import { InputPinForm } from "./InputPinForm";
import { SuccesInfo } from "./SuccesInfo";

export const SetorTunai = ({ onStepChange }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [tokenData, setTokenData] = useState(null);

    useEffect(() => {
        onStepChange(step);
    }, [step, onStepChange]);

    const handleNext = (values) => {
        console.log("handleNext called with values:", values);
        if (values.tokenResponse) {
            setTokenData(values.tokenResponse);
            setStep((prevStep) => prevStep + 1);
        } else {
            setFormData((prevData) => ({ ...prevData, ...values }));
            setStep((prevStep) => prevStep + 1);
        }
    };

    return (
        <>
            {step === 1 && <SetorTunaiForm onNext={handleNext} />}
            {step === 2 && <KonfirmasiForm onNext={handleNext} />}
            {step === 3 && <InputPinForm onNext={handleNext} />}
            {step === 4 && <SuccesInfo tokenData={tokenData} />}
        </>
    );
};
