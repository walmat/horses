import { useEffect, useState } from "react";
import { ethers } from "ethers";

import { horses as horsesContract } from "@contract";

// 0 = paused, 1 = allowlist, 2 = public
type Stage = 0 | 1 | 2;

export const useMintStage = (): Stage => {
    const [stage, setStage] = useState<Stage>(0);
    useEffect(() => {
        const getStage = async () => {
            try {
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum,
                );
                const Contract = new ethers.Contract(
                    horsesContract.addressOrName,
                    horsesContract.contractInterface,
                    provider,
                ).connect(ethers.constants.AddressZero);

                const _isPaused = await Contract._paused();
                if (_isPaused) {
                    return setStage(0);
                }

                const _isPublic = await Contract.publicMintStarted();
                if (_isPublic) {
                    return setStage(2);
                } else {
                    return setStage(1);
                }
            } catch (_) {
                console.error(_);
                // ignore
            }
        };

        getStage();
    }, []);

    return stage;
};

export default useMintStage;
