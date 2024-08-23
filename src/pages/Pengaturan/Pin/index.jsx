import { InputPinForm } from "./InputPinForm";
import { UbahPinContent } from "./UbahPinContent";
import { useTransferContext } from "../../../context/TransferContext";
import { useEffect } from "react";

export const UbahPin = () => {
	const { step, handleNext, handleSubmit } = useTransferContext();
	const { setStep } = useTransferContext()
	useEffect(() => {
		setStep(1)
	}, [])


	return (
		<>
			{step === 1 && <InputPinForm onNext={handleNext} />}
			{step === 2 && <UbahPinContent onSubmit={handleSubmit} />}
		</>
	);
};
