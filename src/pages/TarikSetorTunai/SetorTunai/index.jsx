import { SetorTunaiForm } from "./SetorTunaiForm";
import { KonfirmasiForm } from "./KonfirmasiForm";
import { InputPinForm } from "./InputPinForm";
import { SuccesInfo } from "./SuccesInfo";
import { useQrContext } from "../../../context/QrContext";

export const SetorTunai = () => {
    const { step, handleNextSetor } = useQrContext()

    return (
        <>
            {step === 1 && <SetorTunaiForm onNext={handleNextSetor} />}
            {step === 2 && <KonfirmasiForm onNext={handleNextSetor} />}
            {step === 3 && <InputPinForm onNext={handleNextSetor} />}
            {step === 4 && <SuccesInfo />}
        </>
    );
};
