// src/context/transferRupiahContext.js
import { createContext, useState, useContext } from 'react';

const TransferRupiahContext = createContext();

export const TransferRupiahProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    // const handleNext = (values) => {
    //     setFormData((prevData) => ({ ...prevData, ...values }));
    //     setStep((prevStep) => prevStep + 1);
    // };
    const handleNext = (values) => {
        setFormData((prevData) => ({ ...prevData, ...values }));
        setStep((prevStep) => prevStep + 1);
    };

    const handleSubmit = (values) => {
        console.log("Final Submission", { ...formData, ...values });
        setStep((prevStep) => prevStep + 1);
    };


    return (
        <TransferRupiahContext.Provider value={{ step, setStep, handleNext, handleSubmit, formData }}>
            {children}
        </TransferRupiahContext.Provider>
    );
};

export const useTransferRupiahContext = () => useContext(TransferRupiahContext);
