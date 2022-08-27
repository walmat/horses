import { useState, useEffect, Fragment } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead } from "wagmi";
import { toast } from "react-hot-toast";

import { Logo, Counter } from "@components";
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
    HorsePlatformContainer,
    FenceContainer,
    LeftFence,
    RightFence,
    Gate,
    Pardner,
    SlingerImage,
    UsedSlinger,
    HorsesLeft,
    HiddenHorse,
    HorsePlatform,
    SelectedSlinger,
    HorsesRight,
    ConnectButtonWrapper,
    HiddenHorseContainer,
    Horseshoe,
    SelectedHorseText,
    PriceText,
    GiddyUpButton,
    PublicSaleInfoContainer,
    PublicSaleTitle,
    PublicSaleParagraph,
    SecondaryRow,
    OpenseaButton,
    LooksrareButton,
    SadSlinger,
    TitleParagraph,
} from "./styled";
import useFetch from "@hooks/useFetch";
import { ethers } from "ethers";
import Provider from "@utils/provider";

interface SlingersProps {
    selected: string[];
    slingers: SlingerInterface[] | undefined;
    stage: number;
    error: Error | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleSelectedSlinger: any;
}

const Slingers = ({
    selected,
    slingers,
    stage,
    error,
    handleSelectedSlinger,
}: SlingersProps) => {
    if (error) {
        return <div>{error.message}</div>;
    }

    if (!slingers) {
        return <></>;
    }

    const unused = (slingers || []).filter(({ used }) => !used);
    if (!unused.length) {
        if (stage === 2) {
            return (
                <PublicSaleInfoContainer>
                    <PublicSaleParagraph>
                        SELECT THE NUMBER OF HORSES TO MINT (0.01ETH EACH)
                    </PublicSaleParagraph>
                    <PublicSaleParagraph>OR</PublicSaleParagraph>
                    <PublicSaleParagraph>
                        PURCHASE A GUNSLINGER TO CLAIM YOUR FREE HORSE(S)
                    </PublicSaleParagraph>
                    <SecondaryRow>
                        <a
                            target="_blank"
                            href="https://opensea.io/collection/gunslingersnft"
                        >
                            <OpenseaButton src="/opensea.png" />
                        </a>
                        <a
                            target="_blank"
                            href="https://looksrare.org/collections/0x7350271594848ab8c0371ef4afeef199c69c3e05"
                        >
                            <LooksrareButton src="/looksrare.png" />
                        </a>
                    </SecondaryRow>
                </PublicSaleInfoContainer>
            );
        } else {
            return (
                <PublicSaleInfoContainer>
                    <PublicSaleTitle>Public Sale Not Open Yet!</PublicSaleTitle>
                </PublicSaleInfoContainer>
            );
        }
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

const Horses = ({
    slingers,
    selected,
    handleMint,
    stage,
    amount,
    setAmount,
}: any) => {
    const unused = (slingers || []).filter(({ used }: any) => !used).length;
    if (stage === -1) {
        return null;
    }

    if (!unused && stage === 2) {
        return null;
    }

    if (stage === 2) {
        return (
            <>
                <HiddenHorseContainer>
                    <HiddenHorse src="/mystery.png" />
                </HiddenHorseContainer>
                <HorsePlatformContainer>
                    <Counter amount={amount} setAmount={setAmount} />

                    <Horseshoe src="/horseshoe.png" />
                    <HorsePlatform src="/stand.png" />
                    <SelectedHorseText>
                        MINT {selected.length} HORSES
                    </SelectedHorseText>
                    <SelectedHorseText>
                        PRICE: <PriceText>{amount * 0.01}Ξ</PriceText>
                    </SelectedHorseText>
                    <GiddyUpButton
                        onClick={handleMint}
                        $isSelected={amount > 0}
                        src="/giddy.png"
                    />
                </HorsePlatformContainer>
            </>
        );
    }

    return (
        <>
            <HiddenHorseContainer>
                <HiddenHorse src="/mystery.png" />
            </HiddenHorseContainer>
            <HorsePlatformContainer>
                <Horseshoe src="/horseshoe.png" />
                <HorsePlatform src="/stand.png" />
                <SelectedHorseText>
                    MINT {selected.length} HORSES
                </SelectedHorseText>
                <SelectedHorseText>
                    PRICE: <PriceText>FREE!</PriceText>
                </SelectedHorseText>
                <GiddyUpButton
                    onClick={handleMint}
                    $isSelected={!!selected.length}
                    src="/giddy.png"
                />
            </HorsePlatformContainer>
        </>
    );
};

export const Main: React.FC = () => {
    const [title, setTitle] = useState("");
    const [selected, setSelected] = useState<string[]>([]);
    const [totalMinted, setTotalMinted] = useState(0);
    const [amount, setAmount] = useState(1);

    const stage = useMintStage();
    const { address } = useAccount();

    const { data = [], error } = useFetch<SlingerInterface[]>("/api/slingers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
    });

    const { data: totalSupply } = useContractRead({
        ...horses,
        functionName: "totalSupply",
        watch: true,
    });

    useEffect(() => {
        if (totalSupply) {
            console.log(totalSupply.toNumber());
            setTotalMinted(totalSupply.toNumber());
        }
    }, [totalSupply]);

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

            if (stage === 1) {
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
            (data || []).filter(({ used }) => !used).length,
        );
    }, [title, setTitle, address, stage, data]);

    const handleSelectedSlinger = async ({ id, used }: SlingerInterface) => {
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

    const handleMint = async () => {
        if (!address) {
            return;
        }

        toast.dismiss();

        const provider = Provider();
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(
            horses.addressOrName,
            horses.contractInterface,
            provider,
        ).connect(signer);

        switch (stage) {
            // paused
            default:
            case 0:
                toast.error("SALE PAUSED. HANG TIGHT PARTNER!");
                break;
            // allowlist
            case 1:
                if (selected.length === 0) {
                    return;
                }

                if (selected.length === 1) {
                    const pending = await Contract.claimHorse(selected[0]);

                    const promise = pending.wait();
                    toast.promise(promise, {
                        loading: "txn submitted",
                        success: "txn processed",
                        error: "txn failed",
                    });

                    await promise;
                } else {
                    const pending = await Contract.claimHorses([
                        ...selected.join(","),
                    ]);

                    const promise = pending.wait();
                    toast.promise(promise, {
                        loading: "txn submitted",
                        success: "txn processed",
                        error: "txn failed",
                    });

                    await promise;
                }

                break;
            // public
            case 2: {
                let pending: any;

                if (selected.length === 1) {
                    pending = await Contract.claimHorse(selected[0]);
                } else if (selected.length > 1) {
                    pending = await Contract.claimHorses([
                        ...selected.join(","),
                    ]);
                } else {
                    pending = await Contract.mintHorses(amount, {
                        value: ethers.utils.parseEther(`${amount * 0.01}`),
                    });
                }

                const promise = pending.wait();
                toast.promise(promise, {
                    loading: "txn submitted",
                    success: "txn processed",
                    error: "txn failed",
                });

                await promise;

                break;
            }
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
                    <TitleParagraph>{title}</TitleParagraph>
                </Container>

                {address && (
                    <Fragment>
                        {!(data || []).filter(({ used }) => !used).length ? (
                            <SadSlinger src="/head.png" alt="head" />
                        ) : (
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
                        )}

                        <Slingers
                            {...{
                                address,
                                selected,
                                stage,
                                slingers: data,
                                error,
                                handleSelectedSlinger,
                            }}
                        />
                        <FenceContainer>
                            <Pardner src="/pardner.png" />
                            <LeftFence src="/fence.png" />
                            <Gate
                                $opacity={
                                    !selected.length && stage !== 2 ? 1 : 0
                                }
                                src="/gate.png"
                            />
                            <RightFence src="/fence.png" />
                        </FenceContainer>
                        <HorsesLeft src="/left-horses.png" />
                        <Horses
                            {...{
                                selected,
                                slingers: data,
                                handleMint,
                                stage,
                                amount,
                                setAmount,
                            }}
                        />

                        <HorsesRight src="/right-horses.png" />
                    </Fragment>
                )}
            </Wrapper>
        </Fragment>
    );
};
