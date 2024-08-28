
import { createContext, useState, useContext, useEffect } from 'react';
import { useGetMutationsSummary } from '../services/account/account-mutations-summary';
import { useGetTransferDestination } from '../services/transfer-rupiah/get-transfer-destination';

const TransferContext = createContext();

export const TransferProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [dataIncome, setDataIncome] = useState();
    const [dataExpense, setDataExpense] = useState()
    const today = new Date();

    const currentMonth = ('0' + (today.getMonth() + 1)).slice(-2); // Format sebagai dua digit
    const currentYear = today.getFullYear();

    const handleNext = (values) => {
        setFormData((prevData) => ({ ...prevData, ...values }));
        setStep((prevStep) => prevStep + 1);

    };

    const handleSubmit = (values) => {
        setStep((prevStep) => prevStep + 1);
    };


    const [params, setParams] = useState({
        page: "0",
        size: "10",
    });
    const { data: dataTransaksi, refetch: refetchDataTransaksi } = useGetTransferDestination(params);

    const [options, setOptions] = useState({
        month: currentMonth,
        year: currentYear
    });

    const { data: useMutationsSummary, error: errorMutationSummary } = useGetMutationsSummary(options)

    useEffect(() => {

        if (useMutationsSummary) {
            setDataIncome(useMutationsSummary.income);
            setDataExpense(useMutationsSummary.expense);
        }
    }, [useMutationsSummary, setOptions])

    useEffect(() => {
        if (useMutationsSummary) {
            setDataIncome(useMutationsSummary.income);
            setDataExpense(useMutationsSummary.expense);
        }
    }, [])


    return (
        <TransferContext.Provider value={{ step, setStep, handleNext, handleSubmit, formData, dataIncome, dataExpense, errorMutationSummary, setOptions, dataTransaksi, params, setParams, refetchDataTransaksi }}>
            {children}
        </TransferContext.Provider>
    );
};

export const useTransferContext = () => useContext(TransferContext);
