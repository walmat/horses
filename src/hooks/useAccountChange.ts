import { useEffect } from "react";

export const useAccountChange = (): void => {
    const reload = () => window?.location?.reload();

    useEffect(() => {
        async function attachListeners() {
            window.ethereum?.on("accountsChanged", reload);
            window.ethereum?.on("chainChanged", reload);
        }

        if (window.ethereum) {
            attachListeners();
        }
    }, []);
};

export default useAccountChange;
