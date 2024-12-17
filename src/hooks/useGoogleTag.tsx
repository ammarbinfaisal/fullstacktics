import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import {
	SubmissionError,
	SubmissionSuccess,
	FieldValues,
} from "@formspree/core/dist/index";

interface IUseGoogleTagProps {
	formState: {
		errors: SubmissionError<FieldValues> | null;
		result: SubmissionSuccess | null;
		submitting: boolean;
		succeeded: boolean;
	};
	callback?: () => void;
}

export const useGoogleTag: React.FC<IUseGoogleTagProps> = ({
	formState,
	callback,
}) => {
	useEffect(() => {
		if (formState.succeeded) {
			callback?.();
			// @ts-expect-error - Google Ads conversion tracking
			gtag("event", "conversion", {
				send_to: "AW-11298597203/N4x_COrxrPcZENPSy4sq",
				value: 80.0,
				currency: "INR",
				event_callback: () => {
					console.log("Conversion tracked successfully");
				},
			});
			redirect("/we-will-contact-you");
		}
	}, [formState.succeeded, callback]);

	return null;
};
