/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, Fragment, Dispatch, SetStateAction } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContract, useContractRead, useSigner } from "wagmi";
import { toast } from "react-hot-toast";

import { Logo, Counter } from "@components";
import { useMintStage } from "@hooks/useMintStage";
import { useTotalMinted } from "@hooks/useTotalMinted";
import { useSlingers, Slinger } from "@hooks/useSlingers";
import { useSelected } from "@hooks/useSelected";
import { useTitle } from "@hooks/useTitle";

import { horses } from "@contract";

import {
    Wrapper,
    Container,
    SelectedContainer,
    SelectedImage,
    SlingerWrapper,
    SlingersContainer,
    SelectedAmount,
    RightSelectedImage,
    LeftSelectedImage,
    HorsePlatformContainer,
    FenceContainer,
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
    HorseContainer,
    HorseColumn,
} from "./styled";
import { ethers } from "ethers";

interface SlingersProps {
    selected: string[];
    slingers: Slinger[];
    stage: number;
    handleSelectSlinger: (slinger: Slinger) => void;
}

const Slingers = ({
    selected,
    slingers,
    stage,
    handleSelectSlinger,
}: SlingersProps) => {
    if (!slingers) {
        return <></>;
    }

    if (stage < 1) {
        return <></>;
    }

    const unused = slingers.filter(({ used }) => !used);
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
            {slingers.map((slinger) => (
                <SlingerWrapper>
                    {slinger.used && <UsedSlinger src="/claimed.png" />}
                    <SlingerImage
                        $isUsed={slinger.used}
                        $isSelected={selected.includes(slinger.id)}
                        onClick={() => handleSelectSlinger(slinger)}
                        src={slinger.image}
                        alt={slinger.id}
                    />
                    {selected.includes(slinger.id) && (
                        <SelectedSlinger src="/error.png" />
                    )}
                </SlingerWrapper>
            ))}
        </SlingersContainer>
    );
};

interface HorsesProps {
    slingers: Slinger[];
    selected: string[];
    handleMint: () => Promise<void>;
    stage: -1 | 0 | 1 | 2;
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>;
    totalMinted: number;
}

const Horses = ({
    slingers,
    selected,
    handleMint,
    stage,
    amount,
    setAmount,
    totalMinted,
}: HorsesProps) => {
    const unused = slingers.filter(({ used }) => !used).length;
    if (stage < 1) {
        return null;
    }

    if (!unused && stage !== 2) {
        return null;
    }

    if (unused > 0) {
        return (
            <>
                <HiddenHorseContainer>
                    <HiddenHorse src="/mystery.png" />
                </HiddenHorseContainer>
                <HorsePlatformContainer>
                    <Horseshoe src="/horseshoe.png" />
                    <HorsePlatform src="/stand.png" />
                    <SelectedHorseText>
                        CLAIM {selected.length}{" "}
                        {selected.length > 1 ? "HORSES" : "HORSE"}
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
    }

    return (
        <>
            <HiddenHorseContainer>
                <HiddenHorse src="/mystery.png" />
            </HiddenHorseContainer>
            <HorsePlatformContainer>
                <Counter
                    amount={amount}
                    setAmount={setAmount}
                    totalMinted={totalMinted}
                />

                <Horseshoe src="/horseshoe.png" />
                <HorsePlatform src="/stand.png" />
                <SelectedHorseText>MINT {amount} HORSES</SelectedHorseText>
                <SelectedHorseText>
                    PRICE: <PriceText>{amount / 100}Ξ</PriceText>
                </SelectedHorseText>
                <GiddyUpButton
                    onClick={handleMint}
                    $isSelected={amount > 0}
                    src="/giddy.png"
                />
            </HorsePlatformContainer>
        </>
    );
};

export const Main: React.FC = () => {
    const [amount, setAmount] = useState(1);
    const { data: signer } = useSigner();

    const stage = useMintStage();
    const { address } = useAccount();

    const slingers = useSlingers({ address, stage });
    const { selected, handleSelectSlinger } = useSelected({ slingers });

    const { data: totalSupply } = useContractRead({
        ...horses,
        functionName: "totalSupply",
        watch: true,
    });

    const totalMinted = useTotalMinted({ totalSupply });
    const contract = useContract({
        ...horses,
        signerOrProvider: signer,
    });

    const title = useTitle({ address, stage, slingers });

    const handleMint = async () => {
        if (!address || !signer) {
            return;
        }

        toast.dismiss();

        try {
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
                        const pending = await contract.claimHorse(selected[0]);

                        const promise = pending.wait();
                        toast.promise(promise, {
                            loading: "txn processing",
                            success: "txn successful",
                            error: "txn failed",
                        });

                        await promise;
                    } else {
                        const pending = await contract.claimHorses(
                            [...selected],
                            {
                                gasLimit: 15000000,
                            },
                        );

                        const promise = pending.wait();
                        toast.promise(promise, {
                            loading: "txn processing",
                            success: "txn successful",
                            error: "txn failed",
                        });

                        await promise;
                    }

                    break;
                // public
                case 2: {
                    let pending: any;

                    if (selected.length === 1) {
                        pending = await contract.claimHorse(selected[0]);
                    } else if (selected.length > 1) {
                        pending = await contract.claimHorses([...selected], {
                            gasLimit: 15000000,
                        });
                    } else {
                        pending = await contract.mintHorses(amount, {
                            value: ethers.utils.parseEther(`${amount / 100}`),
                        });
                    }

                    const promise = pending.wait();
                    toast.promise(promise, {
                        loading: "txn processing",
                        success: "txn successful",
                        error: "txn failed",
                    });

                    await promise;

                    break;
                }
            }
        } catch (e) {
            const msg = (e as any)?.message || "txn failed. try again.";

            if (/insufficient funds/i.test(msg)) {
                toast.error("txn failed. insufficient funds");
            } else if (/exceeded/i.test(msg)) {
                toast.error("txn failed. sold out");
            } else if (/sale not started/i.test(msg)) {
                toast.error("txn failed. sale not started");
            } else {
                toast.error(msg);
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
                        {stage < 1 ||
                        !slingers.filter(({ used }) => !used).length ? (
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
                                slingers,
                                handleSelectSlinger,
                            }}
                        />
                        <FenceContainer
                            src={
                                !selected.length && stage !== 2
                                    ? "/fence-locked.png"
                                    : "fence-unlocked.png"
                            }
                        />
                        <HorseContainer>
                            <HorseColumn>
                                <HorsesLeft src="/left-horses.png" />
                            </HorseColumn>
                            <HorseColumn>
                                <Horses
                                    {...{
                                        selected,
                                        slingers,
                                        handleMint,
                                        stage,
                                        amount,
                                        setAmount,
                                        totalMinted,
                                    }}
                                />
                            </HorseColumn>
                            <HorseColumn>
                                <HorsesRight src="/right-horses.png" />
                            </HorseColumn>
                        </HorseContainer>
                    </Fragment>
                )}
            </Wrapper>
        </Fragment>
    );
};
