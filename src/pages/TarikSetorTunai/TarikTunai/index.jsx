import { TarikTunaiForm } from "./TarikTunaiForm";
import { KonfirmasiForm } from "./KonfirmasiForm";
import { InputPinForm } from "./InputPinForm";
import { SuccesInfo } from "./SuccesInfo";
import { useQrContext } from "../../../context/QrContext";

export const TarikTunai = ({ onStepChange }) => {
    const { step, handleNextTarik } = useQrContext()

    return (
        <>
            {step === 1 && <TarikTunaiForm onNext={handleNextTarik} />}
            {step === 2 && <KonfirmasiForm onNext={handleNextTarik} />}
            {step === 3 && <InputPinForm onNext={handleNextTarik}  />}
            {step === 4 && <SuccesInfo />}
        </>
    );
};
