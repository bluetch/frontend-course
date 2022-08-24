import { useState } from "react";
import { ToastContext, useToastContext } from "./../../../hooks/useToast";

export const ToastProvider = ({ children }) => {
	const [toast, setToast] = useState({
		open: false,
		timeout: 5000,
		type: "success",
	});

	const openToast = (type, content) => {
		setToast((prev) => ({
			...prev,
			open: true,
			type: type,
			content: content,
		}));
	};

	const normalToast = (content) => {
		openToast("normal", content);
	};

	const successToast = (content) => {
		openToast("success", content);
	};

	const errorToast = (content) => {
		openToast("error", content);
	};

	const connectionErrorToast = () => {
		errorToast("請確認網路狀態或稍後再試");
	};

	return (
		<ToastContext.Provider
			value={{
				toast: toast,
				setToast: setToast,
				openToast: openToast,
				normalToast: normalToast,
				successToast: successToast,
				errorToast: errorToast,
				connectionErrorToast: connectionErrorToast,
			}}
		>
			{children}
		</ToastContext.Provider>
	);
};

export const Toast = (props) => {
	const { toast, setToast } = useToastContext();
	const { open, timeout, type, content = "" } = toast;

	const handleOnClose = () => {
		setToast((prev) => ({
			...prev,
			open: false,
		}));
	};
	return (
		<div>
      {content}
    </div>
	);
};
