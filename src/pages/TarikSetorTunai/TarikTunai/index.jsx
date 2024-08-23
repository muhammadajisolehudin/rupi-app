import { TarikTunaiForm } from "./TarikTunaiForm";
import { KonfirmasiForm } from "./KonfirmasiForm";
import { InputPinForm } from "./InputPinForm";
import { SuccesInfo } from "./SuccesInfo";
import { useQrContext } from "../../../context/QrContext";

export const TarikTunai = ({ onStepChange }) => {
    const { stepTarik, handleNextTarik } = useQrContext()

    return (
        <>
            {stepTarik === 1 && <TarikTunaiForm onNext={handleNextTarik} />}
            {stepTarik === 2 && <KonfirmasiForm onNext={handleNextTarik} />}
            {stepTarik === 3 && <InputPinForm onNext={handleNextTarik}  />}
            {stepTarik === 4 && <SuccesInfo />}
        </>
    );
};
