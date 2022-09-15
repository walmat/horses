import { ethers, providers } from "ethers";

const Provider = (): providers.JsonRpcProvider => {
    return new ethers.providers.InfuraProvider(
        "mainnet",
        process.env.NEXT_PUBLIC_NODE_ADDRESS,
    );
};

export default Provider;
