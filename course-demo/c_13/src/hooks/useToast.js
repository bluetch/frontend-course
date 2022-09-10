import React, { useContext } from "react";

export const ToastContext = React.createContext();

export const useToastContext = () => {
    return useContext(ToastContext);
};
