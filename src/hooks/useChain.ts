import { useEffect, useState } from "react";

export const useChain = (): string => {
    const [chain, setChain] = useState("");
    useEffect(() => {
        if (window.ethereum) {
            setChain(window.ethereum.networkVersion);
        } else {
            setChain("-");
        }
    }, []);

    return chain;
};

export default useChain;
