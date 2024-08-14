import { useState } from "react";
import { InputPinForm } from "./Pin/InputPinForm";
import { UbahPinContent } from "./Pin/UbahPinContent";

export const UbahPinIndex = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({});

	const handleNext = (values) => {
		console.log("handleNext called with values:", values);
		setFormData((prevData) => ({ ...prevData, ...values }));
		setStep((prevStep) => prevStep + 1);
	};

	const handleSubmit = (values) => {
		console.log("Final Submission", { ...formData, ...values });
		setStep((prevStep) => prevStep + 1);
	};

	return (
		<>
			{step === 1 && <InputPinForm onNext={handleNext} />}
			{step === 2 && <UbahPinContent onSubmit={handleSubmit} />}
		</>
	);
};
