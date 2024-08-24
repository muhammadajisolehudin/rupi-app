// src/context/transferRupiahContext.js
import { createContext, useState, useContext } from 'react';


const QrContext = createContext();

export const QrProvider = ({ children }) => {
    const [stepTarik, setStepTarik] = useState(1);
    const [formDataTarik, setFormDataTarik] = useState({});
    const [formDataSetor, setFormDataSetor] = useState({});
    const [stepSetor, setStepSetor] = useState(1);

    const handleNextTarik = (values) => {
        setFormDataTarik((prevData) => ({ ...prevData, ...values }));
       
        setStepTarik((prevStep) => prevStep + 1);

    };
    const handleNextSetor = (values) => {
        setFormDataSetor((prevData) => ({ ...prevData, ...values }));

        setStepSetor((prevStep) => prevStep + 1);

    };



    const handleSubmit = (values) => {
        console.log("Final Submission", { ...formDataTarik, ...formDataSetor, ...values });
        if(setStepSetor){
            setStepSetor((prevStep) => prevStep + 1)
        }
        setStepTarik((prevStep) => prevStep + 1)
    };


    return (
        <QrContext.Provider value={{ stepTarik, setStepTarik, stepSetor, setStepSetor, handleNextTarik, handleNextSetor, handleSubmit, formDataSetor, formDataTarik }}>
            {children}
        </QrContext.Provider>
    );
};

export const useQrContext = () => useContext(QrContext);
