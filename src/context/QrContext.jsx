// src/context/transferRupiahContext.js
import { createContext, useState, useContext } from 'react';


const QrContext = createContext();

export const QrProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formDataTarik, setFormDataTarik] = useState({});
    const [formDataSetor, setFormDataSetor] = useState({});

    const handleNextTarik = (values) => {
        setFormDataTarik((prevData) => ({ ...prevData, ...values }));
       
        setStep((prevStep) => prevStep + 1);

    };
    const handleNextSetor = (values) => {
        setFormDataSetor((prevData) => ({ ...prevData, ...values }));

        setStep((prevStep) => prevStep + 1);

    };



    const handleSubmit = (values) => {
        console.log("Final Submission", { ...formDataTarik, ...formDataSetor, ...values });
        setStep((prevStep) => prevStep + 1);
    };


    return (
        <QrContext.Provider value={{ step, setStep, handleNextTarik, handleNextSetor, handleSubmit, formDataSetor, formDataTarik }}>
            {children}
        </QrContext.Provider>
    );
};

export const useQrContext = () => useContext(QrContext);
