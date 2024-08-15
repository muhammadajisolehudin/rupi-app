import { useState } from "react";
import { InputPinForm } from "./InputPinForm";
import { UbahPinContent } from "./UbahPinContent";
import { useTransferRupiahContext } from "../../../context/TransferRupiahContext";

export const UbahPin = () => {
	const { step, handleNext, handleSubmit } = useTransferRupiahContext();

	return (
		<>
			{step === 1 && <InputPinForm onNext={handleNext} />}
			{step === 2 && <UbahPinContent onSubmit={handleSubmit} />}
		</>
	);
};
