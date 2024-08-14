import { useState } from "react";
import { SetorTunaiForm } from "./SetorTunaiForm";
import { KonfirmasiForm } from "./KonfirmasiForm";
import { InputPinForm } from "./InputPinForm";
import { SuccesInfo } from "./SuccesInfo";
// import { SuccesInfo } from "../TarikTunai/SuccesInfo";

export const SetorTunai = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNext = (values) => {
        console.log("handleNext called with values:", values);
        setFormData((prevData) => ({ ...prevData, ...values }));
        setStep((prevStep) => prevStep + 1);
    };

    const handleSubmit = (values) => {
        console.log("Final Submission", { ...formData, ...values });
        setStep((prevStep) => prevStep + 1);
    };

    return (
        <>
            {step === 1 && <SetorTunaiForm onNext={handleNext} />}
            {step === 2 && <KonfirmasiForm onNext={handleNext} />}
            {step === 3 && <InputPinForm onNext={handleNext} />}
            {step === 4 && <SuccesInfo onSubmit={handleSubmit} />}
        </>
    );
};
