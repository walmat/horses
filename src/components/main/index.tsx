import { useState, useEffect, Fragment } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
    useAccount,
    useContractRead,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from "wagmi";

import { Logo } from "@components";
import { Slinger as SlingerInterface } from "@hooks/useSlingers";
import { useMintStage } from "@hooks/useMintStage";
import { horses } from "@contract";

import {
    Wrapper,
    Container,
    SelectedContainer,
    SelectedImage,
    Slinger,
    SlingersContainer,
    SelectedAmount,
    RightSelectedImage,
    LeftSelectedImage,
    FenceContainer,
    LeftFence,
    RightFence,
    Gate,
    Pardner,
    SlingerImage,
    UsedSlinger,
    FooterContainer,
    FooterColumn,
    HorsesLeft,
    HiddenHorse,
    HorsePlatform,
    SelectedSlinger,
    HorsesRight,
    ConnectButtonWrapper,
    GateColumn,
} from "./styled";
import useFetch from "@hooks/useFetch";

interface SlingersProps {
    selected: string[];
    slingers: SlingerInterface[] | undefined;
    error: Error | undefined;
    handleSelectedSlinger: any;
}

const Slingers = ({
    selected,
    slingers,
    error,
    handleSelectedSlinger,
}: SlingersProps) => {
    if (error) {
        return <div>{error.message}</div>;
    }

    if (!slingers) {
        return <></>;
    }
    return (
        <SlingersContainer>
            {(slingers || []).map((slinger) => (
                <Slinger>
                    {slinger.used && <UsedSlinger src="/claimed.png" />}
                    <SlingerImage
                        $isUsed={slinger.used}
                        $isSelected={selected.includes(slinger.id)}
                        onClick={() => handleSelectedSlinger(slinger)}
                        src={slinger.image}
                        alt={slinger.id}
                    />
                    {selected.includes(slinger.id) && (
                        <SelectedSlinger src="/error.png" />
                    )}
                </Slinger>
            ))}
        </SlingersContainer>
    );
};

export const Main: React.FC = () => {
    const [title, setTitle] = useState("GATHERING WALLET INFORMATION...");
    const [selected, setSelected] = useState<string[]>([]);
    const [totalMinted, setTotalMinted] = useState(0);

    const stage = useMintStage();
    const { address } = useAccount();

    const { data = [], error } = useFetch<SlingerInterface[]>("/api/slingers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
    });
    // const { config: horsesConfig } = usePrepareContractWrite({
    //     ...horses,
    //     functionName: "claimHorses",
    //     args: [selected],
    // });

    // const {
    //     data: mintData,
    //     write: mint,
    //     isLoading: isMintLoading,
    //     isSuccess: isMintStarted,
    //     error: mintError,
    // } = useContractWrite(horsesConfig);

    // const { data: totalSupply } = useContractRead({
    //     ...horses,
    //     functionName: "totalSupply",
    //     watch: true,
    // });

    // const {
    //     data: txData,
    //     isSuccess: txSuccess,
    //     error: txError,
    // } = useWaitForTransaction({
    //     hash: mintData?.hash,
    // });

    // useEffect(() => {
    //     if (totalSupply) {
    //         setTotalMinted(totalSupply.toNumber());
    //     }
    // }, [totalSupply]);

    useEffect(() => {
        const getMessage = (
            address: string | undefined,
            stage: number,
            numSlingers: number,
        ) => {
            if (!address) {
                return setTitle("PLEASE CONNECT YOUR WALLET");
            }

            if (numSlingers === 0) {
                return setTitle("NO GUNSLINGERS FOUND IN YOUR WALLET");
            }

            if (stage === 0) {
                return setTitle("SALE PAUSED. HANG TIGHT PARTNER");
            }

            if (stage === 1) {
                return setTitle(
                    "SELECT YOUR GUNSLINGERS TO CLAIM YOUR FREE HORSES",
                );
            }
        };

        getMessage(address, stage, (data || []).length);
    }, [title, setTitle, address, stage, (data || []).length]);

    const handleSelectedSlinger = async ({ id, used }: SlingerInterface) => {
        if (used) {
            return;
        }

        if (selected.includes(id)) {
            setSelected(selected.filter((s) => s !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    return (
        <Fragment key="connected">
            <Logo />
            <Wrapper $fullscreen={!address}>
                <ConnectButtonWrapper>
                    <ConnectButton
                        key="address"
                        chainStatus="none"
                        accountStatus="address"
                        showBalance={false}
                        label="Connect"
                    />
                </ConnectButtonWrapper>
                <Container>
                    <p>{title}</p>
                </Container>

                {address && (
                    <Fragment>
                        <SelectedContainer>
                            <SelectedImage
                                src="/selected.png"
                                alt="gunslingers selected"
                            />
                            <LeftSelectedImage src="/left.png" />
                            <Container>
                                <SelectedAmount $amount={selected.length}>
                                    {selected.length}
                                </SelectedAmount>
                            </Container>
                            <RightSelectedImage src="/right.png" />
                        </SelectedContainer>
                        <Slingers
                            {...{
                                address,
                                selected,
                                slingers: data,
                                error,
                                handleSelectedSlinger,
                            }}
                        />
                        <FenceContainer>
                            <Pardner src="/pardner.png" />
                            <LeftFence src="/fence.png" />
                            <Gate
                                $opacity={!selected.length ? 1 : 0}
                                src="/gate.png"
                            />
                            <RightFence src="/fence.png" />
                        </FenceContainer>
                        <FooterContainer>
                            <FooterColumn flex={1}>
                                <HorsesLeft src="/left-horses.png" />
                            </FooterColumn>
                            <GateColumn flex={0}>
                                <HiddenHorse src="/mystery.png" />
                                <HorsePlatform src="/stand.png" />
                            </GateColumn>
                            <FooterColumn flex={1}>
                                <HorsesRight src="/right-horses.png" />
                            </FooterColumn>
                        </FooterContainer>
                    </Fragment>
                )}
            </Wrapper>
        </Fragment>
    );
};
