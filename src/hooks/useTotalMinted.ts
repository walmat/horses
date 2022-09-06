import { ethers } from "ethers";
import { useEffect, useState } from "react";

interface TotalMintedProps {
    totalSupply: ethers.utils.Result | undefined;
}

export const useTotalMinted = ({ totalSupply }: TotalMintedProps): number => {
    const [totalMinted, setTotalMinted] = useState<number>(0);

    useEffect(() => {
        if (totalSupply) {
            setTotalMinted(totalSupply.toNumber());
        }
    }, [totalSupply]);

    return totalMinted;
};

export default useTotalMinted;
