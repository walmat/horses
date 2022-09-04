import { ethers, providers } from "ethers";

const Provider = (): providers.JsonRpcProvider => {
    return new ethers.providers.InfuraProvider(
        "rinkeby",
        process.env.NEXT_PUBLIC_NODE_ADDRESS,
    );
};

export default Provider;
