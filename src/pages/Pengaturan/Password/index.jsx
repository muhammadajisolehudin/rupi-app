import { UbahPasswordContent } from "./UbahPasswordContent";
import { InputPasswordForm } from "./InputPasswordForm";
import { useTransferContext } from "../../../context/TransferContext";
import { useEffect } from "react";

export const UbahPassword = () => {
	const { step, handleNext, handleSubmit } = useTransferContext();
	const { setStep } = useTransferContext()
	useEffect(() => {
		setStep(1)
	}, [])

	return (
		<>
			{step === 1 && <InputPasswordForm onNext={handleNext} />}
			{step === 2 && <UbahPasswordContent onSubmit={handleSubmit} />}
		</>
	);
};
