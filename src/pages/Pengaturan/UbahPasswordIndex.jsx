import { useState } from "react";
import { UbahPasswordContent } from "./Password/UbahPasswordContent";
import { InputPasswordForm } from "./Password/InputPasswordForm";

export const UbahPasswordIndex = () => {
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
			{step === 1 && <InputPasswordForm onNext={handleNext} />}
			{step === 2 && <UbahPasswordContent onSubmit={handleSubmit} />}
		</>
	);
};
