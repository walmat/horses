import { useEffect, useState } from "react";
import { ethers } from "ethers";

import Provider from "@utils/provider";

import {
    slingers as slingerContract,
    horses as horsesContract,
} from "@contract";

interface IncomingProps {
    address: string | undefined;
}

export interface Slinger {
    id: string;
    used: boolean;
    image: string;
}

export const useSlingers = ({ address }: IncomingProps): Slinger[] => {
    const [slingers, setSlingers] = useState<Slinger[]>([]);
    useEffect(() => {
        const getSlingers = async () => {
            try {
                if (!address) {
                    return;
                }

                const provider = Provider();
                const Contract = new ethers.Contract(
                    slingerContract.addressOrName,
                    slingerContract.contractInterface,
                    provider,
                ).connect(ethers.constants.AddressZero);

                const Horses = new ethers.Contract(
                    horsesContract.addressOrName,
                    horsesContract.contractInterface,
                    provider,
                ).connect(ethers.constants.AddressZero);

                const _hexNum = await Contract.balanceOf(address);
                const _num = parseInt(_hexNum, 16);

                for (const i of Array(_num).keys()) {
                    const id = (
                        await Contract.tokenOfOwnerByIndex(address, i)
                    ).toString();

                    // const used = await Horses.checkIfGunslingerUsed(id);
                    // console.log(used);
                    setSlingers((prev) => [
                        ...prev,
                        {
                            id,
                            used: false,
                            image: `https://gateway.pinata.cloud/ipfs/QmPbF9ShqywKQEFkJtTW1BRWjsZmrAPXLsvApg8VApMHg7/${id}.jpeg`,
                        },
                    ]);
                }
            } catch (_) {
                console.error(_);
                // ignore
            }
        };

        getSlingers();

        return () => setSlingers([]);
    }, [address]);

    return slingers;
};

export default useSlingers;
