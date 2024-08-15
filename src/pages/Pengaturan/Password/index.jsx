import { useState } from "react";
import { UbahPasswordContent } from "./UbahPasswordContent";
import { InputPasswordForm } from "./InputPasswordForm";
import { useTransferRupiahContext } from "../../../context/TransferRupiahContext";

export const UbahPassword = () => {
	const { step, handleNext, handleSubmit } = useTransferRupiahContext();

	return (
		<>
			{step === 1 && <InputPasswordForm onNext={handleNext} />}
			{step === 2 && <UbahPasswordContent onSubmit={handleSubmit} />}
		</>
	);
};
