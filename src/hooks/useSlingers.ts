import { useEffect, useState } from "react";

interface SlingersProps {
    address: string | undefined;
    stage: -1 | 0 | 1 | 2;
}

export interface Slinger {
    id: string;
    used: boolean;
    image: string;
}

export const useSlingers = ({ address, stage }: SlingersProps): Slinger[] => {
    const [slingers, setSlingers] = useState<Slinger[]>([]);

    useEffect(() => {
        const getSlingers = async () => {
            if (stage < 1) {
                return;
            }

            try {
                const res = await fetch("/api/slingers", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ address }),
                });

                const data = await res.json();

                if (data.length) {
                    setSlingers(data);
                } else {
                    setSlingers([]);
                }
            } catch (_) {
                setSlingers([]);
            }
        };

        getSlingers();

        // const int = setInterval(getSlingers, 30_000);
        // return () => clearInterval(int);
    }, [address, stage]);

    return slingers;
};

export default useSlingers;
