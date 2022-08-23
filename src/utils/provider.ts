import { ethers, providers } from "ethers";

const Provider = (): providers.JsonRpcProvider | providers.Web3Provider => {
    if (
        typeof window !== "undefined" &&
        typeof window.ethereum !== "undefined"
    ) {
        return new ethers.providers.Web3Provider(window.ethereum);
    } else {
        return new ethers.providers.InfuraProvider(
            "mainnet",
            process.env.NEXT_PUBLIC_NODE_ADDRESS,
        );
    }
};

export default Provider;
