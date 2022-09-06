import { useEffect, useState } from "react";
import { Slinger } from "./useSlingers";

interface SlingersProps {
    address: string | undefined;
    stage: -1 | 0 | 1 | 2;
    slingers: Slinger[];
}

export const useTitle = ({
    address,
    stage,
    slingers,
}: SlingersProps): string => {
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        const getMessage = (
            address: string | undefined,
            stage: number,
            numSlingers: number,
        ) => {
            if (!address) {
                return setTitle("PLEASE CONNECT YOUR WALLET");
            }

            if (stage < 1) {
                return setTitle("SALE PAUSED. HANG TIGHT PARTNER!");
            }

            if (numSlingers === 0) {
                return setTitle("NO GUNSLINGERS FOUND IN YOUR WALLET");
            }

            if (numSlingers > 0 || stage === 1) {
                return setTitle(
                    "SELECT YOUR GUNSLINGERS TO CLAIM YOUR FREE HORSES",
                );
            }

            if (stage === 2) {
                return setTitle("PUBLIC SALE LIVE. SADDLE UP!");
            }
        };

        getMessage(
            address,
            stage,
            (slingers || []).filter(({ used }) => !used).length,
        );
    }, []);

    return title;
};

export default useTitle;
