import type { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";

import Provider from "@utils/provider";

import { slingers as slingerContract } from "@contract";

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

    const _num = (await Contract.balanceOf(address)).toNumber();
    const promises = [...Array(_num).keys()].map((i) =>
        Contract.tokenOfOwnerByIndex(address, i),
    );

    const slingers = (await Promise.all(promises)).map((hexId) => ({
        id: hexId.toString(),
        used: false,
        image: `https://gateway.pinata.cloud/ipfs/QmXmC5qJ5MsNpeABgGB5DnTekFRsD5E5bCmHEgA2zs3Udd/${hexId.toString()}.png`,
    }));

    return res.status(200).json(slingers);
};

export default slingersHandler;
