import { useEffect, useState } from "react";
import { Slinger } from "./useSlingers";
import toast from "react-hot-toast";

interface SelectedProps {
    slingers: Slinger[];
}

interface ReturnProps {
    selected: string[];
    handleSelectSlinger: ({ id, used }: Slinger) => void;
}

export const useSelected = ({ slingers }: SelectedProps): ReturnProps => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleSelectSlinger = async ({ id, used }: Slinger) => {
        if (used) {
            return;
        }

        toast.dismiss();
        if (selected.length === 100) {
            toast.error("Maximum of 100 slingers selected.");
            return;
        }

        if (selected.includes(id)) {
            setSelected(selected.filter((s) => s !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    useEffect(() => {
        const checkSelected = () =>
            selected.forEach((id) => {
                const slinger = slingers.find(({ id: _id }) => _id === id);
                if (slinger?.used) {
                    setSelected(selected.filter((s) => s !== slinger.id));
                }
            });

        checkSelected();

        const int = setInterval(checkSelected, 10_000);
        return () => clearInterval(int);
    }, []);

    return { selected, handleSelectSlinger };
};

export default useSelected;
