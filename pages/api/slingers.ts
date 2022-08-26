import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";

import Provider from "@utils/provider";

import {
    slingers as slingerContract,
    horses as horsesContract,
} from "@contract";

export const slingersHandler = async (
    { body }: NextApiRequest,
    res: NextApiResponse,
): Promise<void> => {
    const { address } = body;
    if (!address) {
        return res.status(400).json([]);
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
        // TODO: Change back once tested
        new ethers.providers.InfuraProvider(
            "rinkeby",
            process.env.NEXT_PUBLIC_NODE_ADDRESS,
        ),
    ).connect(ethers.constants.AddressZero);

    const _num = (await Contract.balanceOf(address)).toNumber();
    const promises = [...Array(_num).keys()].map((i) =>
        Contract.tokenOfOwnerByIndex(address, i),
    );

    const objects = await (
        await Promise.all(promises)
    ).map(async (hexId) => {
        const id = hexId.toString();
        const used = await Horses.checkIfGunslingerUsed(id);
        return {
            id,
            used: true,
            image: `https://gateway.pinata.cloud/ipfs/QmXmC5qJ5MsNpeABgGB5DnTekFRsD5E5bCmHEgA2zs3Udd/${id}.png`,
        };
    });

    const slingers = await Promise.all(objects);
    console.log(slingers);

    return res.status(200).json(slingers);
};

export default slingersHandler;
