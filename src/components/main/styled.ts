import styled from "styled-components";

export const Wrapper = styled.div<{ $fullscreen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 100%;
    color: #000;
    ${({ $fullscreen }) =>
        $fullscreen &&
        `
        align-items: center;
    `}
`;

export const FullscreenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0 2rem 0;
    color: ${({ theme }) => theme.colors.blackGrey};
`;

export const ConnectButtonWrapper = styled.div`
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    & > div > button > div > div > div > div {
        display: none !important;
    }

    @media (min-width: 600px) {
        & > div > button > div > div > div > div {
            display: unset !important;
        }
    }
`;

export const SelectedImage = styled.img`
    position: relative;
    display: flex;
    width: 55%;
    min-width: 188px;
    max-width: 244px;
    min-height: 60px;
    margin: 0 auto;

    @media (min-width: 600px) {
        height: 10vh;
        width: auto;
        min-width: unset;
        max-width: unset;
    }
`;

export const TitleParagraph = styled.p`
    max-width: 100vw;
    padding: 0 2rem;
    margin: 1rem auto;
    font-size: 1.35rem !important;

    @media (min-width: 600px) {
        padding: 0 2rem;
        font-size: 1.45rem !important;
    }

    @media (min-width: 1085px) {
        padding: 0;
        font-size: 1.65rem !important;
    }
`;

export const Pardner = styled.img`
    position: absolute;
    margin: 0;
    left: 60vw;
    bottom: -20px;
    min-width: 88px;
    width: 7.5vw;
    min-height: 48px;
`;

export const SelectedAmount = styled.h2<{ $amount: number }>`
    position: absolute;
    margin: 0;
    top: 8px;
    left: calc(50% - ${({ $amount }) => ($amount < 10 ? 6 : 10)}px);
    font-size: 1rem;

    @media (min-width: 600px) {
        font-size: 1.5rem;
        top: 10px;
        left: calc(50% - ${({ $amount }) => ($amount < 10 ? 7 : 11)}px);
    }
`;

export const RightSelectedImage = styled.img`
    position: absolute;
    top: 12px;
    right: calc(50% - 48px);
    height: 20%;

    @media (min-width: 600px) {
        height: 25%;
        right: calc(50% - 64px);
    }
`;

export const LeftSelectedImage = styled.img`
    position: absolute;
    top: 12px;
    left: calc(50% - 48px);
    height: 20%;

    @media (min-width: 600px) {
        height: 25%;
        left: calc(50% - 64px);
    }
`;

export const SelectedContainer = styled.div`
    position: relative;
`;

export const SadSlinger = styled.img`
    display: flex;
    height: 48px;
    margin: 16px auto;

    @media (min-width: 1085px) {
        height: 64px;
    }
`;

export const Container = styled.div`
    text-align: center;

    h1 {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.2rem;
        padding-bottom: 0.75rem;
    }
    p {
        font-size: 1rem;
        font-weight: 300;
    }
`;

export const SlingersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem auto;
    height: auto;
    justify-content: flex-start;
    max-height: 10vh;
    overflow-y: auto;
    max-width: 100vw;
    padding: 0 2rem;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 480px) {
        max-height: 12vh;
    }

    @media (min-width: 600px) {
        max-height: 15vh;
        margin: 0 auto;
        max-width: 48rem;
    }

    @media (min-width: 1085px) {
        margin: 0 auto;
        max-height: 15vh;
        max-width: 60rem;
    }
`;

export const FenceContainer = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 175vw;

    @media (min-width: 768px) {
        max-width: 150vw;
    }

    @media (min-width: 1024px) {
        max-width: 110vw;
    }

    @media (min-width: 1200px) {
        max-width: 110vw;
    }
`;

export const Slinger = styled.div`
    display: flex;
    margin: 0.795rem;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;
`;

export const PublicSaleInfoContainer = styled.div`
    display: flex;
    max-width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px auto 0 auto;

    @media (min-width: 600px) {
        max-width: 48rem;
    }
`;

export const PublicSaleParagraph = styled.p`
    font-size: 1rem;
    padding: 0 2rem;
    font-weight: 300;
    text-align: center;
    margin: 0;
`;

export const OpenseaButton = styled.img`
    height: 28px;
    cursor: pointer;
    margin-right: 8px;

    @media (min-width: 600px) {
        height: 32px;
    }
`;
export const LooksrareButton = styled.img`
    height: 28px;
    cursor: pointer;
    margin-left: 8px;

    @media (min-width: 600px) {
        height: 32px;
    }
`;

export const SecondaryRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px auto;
    max-width: 100vw;

    @media (min-width: 600px) {
        margin: 16px auto;
    }
`;

export const PublicSaleTitle = styled.h1`
    font-size: 1.25rem;
    text-transform: uppercase;
`;

export const SelectedSlinger = styled.img`
    position: absolute;
    bottom: 0px;
    right: 8px;
    max-height: 16px;

    @media (min-width: 600px) {
        bottom: 8px;
        right: 8px;
    }
`;

export const UsedSlinger = styled.img`
    position: absolute;
    max-height: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SlingerImage = styled.img<{
    $isUsed: boolean;
    $isSelected: boolean;
}>`
    display: flex;
    max-height: 64px;
    object-fit: contain;
    background-color: transparent;
    opacity: ${({ $isSelected, $isUsed }) =>
        $isSelected || $isUsed ? 1 : 0.6};

    @media (min-width: 480px) {
        max-height: 12vh;
    }
`;

export const HorseContainer = styled.div`
    display: flex;
    max-height: 40vh;
    flex: 1;
    margin: 0;
`;

export const HorseColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const HorsesLeft = styled.img`
    max-height: 28vh;
    display: flex;
    object-fit: contain;
    margin: 0 -2.5vw 0 auto;

    @media (min-width: 480px) {
        max-height: 26vh;
        margin: 16px -1vw 0px auto;
    }

    @media (min-width: 600px) {
        max-height: 32vh;
        margin: 32px -5vw 0 auto;
    }

    @media (min-width: 768px) {
        max-height: 32vh;
        margin: 32px -5vw 0 auto;
    }

    @media (min-width: 900px) {
        max-height: 32vh;
        margin: 8px -5vw 0 auto;
    }
`;

export const HiddenHorseContainer = styled.div`
    margin: -24px auto 0 auto;
    display: flex;
    flex: 1;
    justify-content: center;

    @media (min-width: 600px) {
        margin: -32px auto 16px auto;
    }

    @media (min-width: 600px) {
        margin: -40px auto 16px auto;
    }

    @media (min-width: 768px) {
        margin: -40px auto 16px auto;
    }

    @media (min-width: 900px) {
        margin: -58px auto 16px auto;
    }
`;

export const HiddenHorse = styled.img`
    max-width: 100%;
    height: 22.5vw;
    max-height: 118px;

    @media (min-width: 480px) {
        height: 20vw;
        max-height: 100px;
    }

    @media (min-width: 600px) {
        height: 25vw;
        max-height: 136px;
    }
`;

export const HorsePlatformContainer = styled.div`
    margin: 16px auto 0 auto;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    @media (min-width: 768px) {
        margin: 0 auto;
    }
`;

export const Horseshoe = styled.img`
    position: relative;
    width: 40px;
    top: 18px;

    @media (min-width: 600px) {
        width: 48px;
        top: 20px;
    }
`;

export const SelectedHorseText = styled.p`
    position: relative;
    margin: 2px 0;
    text-align: center;
    top: -84px;
    font-size: 0.875rem;
    font-weight: 300;

    @media (min-width: 600px) {
        font-size: 1rem;
        top: -100px;
    }
`;

export const PriceText = styled.span`
    position: relative;
    margin: 0 0 0 4px;
    font-weight: 300;
    color: #1d9260;
    font-size: 0.875rem;

    @media (min-width: 600px) {
        font-size: 1rem;
    }
`;

export const GiddyUpButton = styled.img<{ $isSelected: boolean }>`
    position: relative;
    top: -78px;
    width: 64px;
    cursor: ${({ $isSelected }) => ($isSelected ? "pointer" : "default")};
    opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.6)};

    @media (min-width: 600px) {
        top: -94px;
        width: 84px;
    }
`;

export const HorsePlatform = styled.img`
    width: 50vw;
    max-width: 212px;

    @media (min-width: 600px) {
        width: 50vw;
        max-width: 248px;
    }
`;

export const HorsesRight = styled.img`
    max-height: 36vh;
    display: flex;
    object-fit: contain;
    margin: -32px auto 0 -5vw;

    @media (min-width: 480px) {
        max-height: 34vh;
        margin: -36px auto 0px -10vw;
    }

    @media (min-width: 600px) {
        max-height: 40vh;
        margin: -16px auto 0 -10vw;
    }

    @media (min-width: 768px) {
        max-height: 42vh;
        margin: -32px auto 0 -5vw;
    }

    @media (min-width: 900px) {
        max-height: 42vh;
        margin: -58px auto 0 -5vw;
    }
`;
