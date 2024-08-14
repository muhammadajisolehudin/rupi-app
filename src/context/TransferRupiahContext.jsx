// src/context/transferRupiahContext.js
import { createContext, useState, useContext, useEffect } from 'react';
import { useGetMutationsSummary } from '../services/account/account-mutations-summary';
// import { useAuthContext } from './AuthContext';
import { useGetDataTransaksi } from '../services/transfer-rupiah/get-data-transaksi';

const TransferRupiahContext = createContext();

export const TransferRupiahProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [dataIncome, setDataIncome] = useState();
    const [dataExpense, setDataExpense] = useState()
    const today = new Date();

    const currentMonth = ('0' + (today.getMonth() + 1)).slice(-2); // Format sebagai dua digit
    const currentYear = today.getFullYear();

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

    const [options, setOptions] = useState({
        month: currentMonth,
        year: currentYear
    });

    const { data: dataTransaksi } = useGetDataTransaksi();
    const { data: useMutationsSummary, error: errorMutationSummary } = useGetMutationsSummary(options)
    
    useEffect(() => {

        if (useMutationsSummary) {
            setDataIncome(useMutationsSummary.income);
            setDataExpense(useMutationsSummary.expense);
        }
        console.log("ini data income: ", useMutationsSummary)
        console.log("lalala", options)
    }, [useMutationsSummary, setOptions])


    return (
        <TransferRupiahContext.Provider value={{ step, setStep, handleNext, handleSubmit, formData, dataIncome, dataExpense, errorMutationSummary, setOptions, dataTransaksi }}>
            {children}
        </TransferRupiahContext.Provider>
    );
};

export const useTransferRupiahContext = () => useContext(TransferRupiahContext);
