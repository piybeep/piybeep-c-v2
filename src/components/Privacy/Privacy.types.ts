import React, { ComponentProps } from "react";

export interface PrivacyProps extends ComponentProps<"input"> {
	text: string | React.ReactNode;
}
