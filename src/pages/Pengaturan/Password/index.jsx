import { UbahPasswordContent } from "./UbahPasswordContent";
import { InputPasswordForm } from "./InputPasswordForm";
import { useTransferContext } from "../../../context/TransferContext";

export const UbahPassword = () => {
	const { step, handleNext, handleSubmit } = useTransferContext();

	return (
		<>
			{step === 1 && <InputPasswordForm onNext={handleNext} />}
			{step === 2 && <UbahPasswordContent onSubmit={handleSubmit} />}
		</>
	);
};
