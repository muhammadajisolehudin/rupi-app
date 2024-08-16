import { InputPinForm } from "./InputPinForm";
import { UbahPinContent } from "./UbahPinContent";
import { useTransferContext } from "../../../context/TransferContext";

export const UbahPin = () => {
	const { step, handleNext, handleSubmit } = useTransferContext();

	return (
		<>
			{step === 1 && <InputPinForm onNext={handleNext} />}
			{step === 2 && <UbahPinContent onSubmit={handleSubmit} />}
		</>
	);
};
