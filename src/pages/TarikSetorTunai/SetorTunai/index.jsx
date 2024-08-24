import { SetorTunaiForm } from "./SetorTunaiForm";
import { KonfirmasiForm } from "./KonfirmasiForm";
import { InputPinForm } from "./InputPinForm";
import { SuccesInfo } from "./SuccesInfo";
import { useQrContext } from "../../../context/QrContext";

export const SetorTunai = () => {
    const { stepSetor, handleNextSetor } = useQrContext()

    return (
        <>
            {stepSetor === 1 && <SetorTunaiForm onNext={handleNextSetor} />}
            {stepSetor === 2 && <KonfirmasiForm onNext={handleNextSetor} />}
            {stepSetor === 3 && <InputPinForm onNext={handleNextSetor} />}
            {stepSetor === 4 && <SuccesInfo />}
        </>
    );
};
