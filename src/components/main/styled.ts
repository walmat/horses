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
`;

export const SelectedImage = styled.img`
    position: relative;
    display: flex;
    width: 55%;
    min-width: 188px;
    max-width: 244px;
    min-height: 60px;
    margin: 0 auto;
`;

export const TitleParagraph = styled.p`
    max-width: 48rem;
    padding: 0 2rem;
    margin: 1rem auto;

    @media (min-width: 1085px) {
        margin: 2rem auto;
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
`;

export const RightSelectedImage = styled.img`
    position: absolute;
    top: 12px;
    right: calc(50% - 48px);
    height: 20%;
`;

export const LeftSelectedImage = styled.img`
    position: absolute;
    top: 12px;
    left: calc(50% - 48px);
    height: 20%;
`;

export const SelectedContainer = styled.div`
    position: relative;
`;

export const SadSlinger = styled.img`
    display: flex;
    height: 48px;
    margin: 0 auto;

    @media (min-width: 1085px) {
        height: 64px;
    }
`;

export const Container = styled.div`
    text-align: center;

    h1 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2rem;
        padding-bottom: 0.75rem;
    }
    p {
        font-size: 1.125rem;
        font-weight: 300;
    }
`;

export const SlingersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
    height: auto;
    justify-content: flex-start;
    max-height: 20vh;
    min-height: 64px;
    overflow-y: auto;

    @media (min-width: 1085px) {
        min-height: 88px;
        margin: 2rem;
        max-height: 12vh;
    }
`;

export const FenceContainer = styled.div`
    position: absolute;
    width: 200vw;
    left: -50vw;
    bottom: 40%;
    display: flex;
    justify-content: center;
`;

export const LeftFence = styled.img``;

export const Gate = styled.img<{ $opacity: number }>`
    opacity: ${({ $opacity }) => $opacity};
`;

export const RightFence = styled.img`
    min-height: 64px;
`;

export const Slinger = styled.div`
    display: flex;
    max-height: 64px;
    margin: 0.795rem;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 10;

    @media (min-width: 600px) {
        max-height: 88px;
    }
`;

export const PublicSaleInfoContainer = styled.div`
    display: flex;
    max-width: 48rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 16px auto 0 auto;
`;

export const PublicSaleParagraph = styled.p`
    font-size: 1.125rem;
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
    font-size: 1.5rem;
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
        max-height: 88px;
    }
`;

export const HorsesLeft = styled.img`
    position: absolute;
    bottom: 7.5%;
    left: -48px;
    max-width: 75%;
    max-height: 212px;
    object-fit: contain;

    @media (min-width: 480px) {
        max-height: 244px;
    }

    @media (min-width: 768px) {
        max-height: 322px;
        left: 5%;
    }

    @media (min-width: 1024px) {
        left: 15%;
    }

    @media (min-width: 1200px) {
        left: 22.5%;
    }
`;

export const HiddenHorseContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 27.5%;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: flex-end;

    @media (min-width: 600px) {
        bottom: 30%;
    }
`;

export const HiddenHorse = styled.img`
    max-width: 100%;
    height: 25vw;
    max-height: 112px;

    @media and (min-width: 480px) {
        height: 20vw;
    }
`;

export const HorsePlatformContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: -2.5%;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: center;

    @media (min-width: 600px) {
        bottom: -5%;
    }
`;

export const Horseshoe = styled.img`
    position: relative;
    width: 28px;
    top: 12px;

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
    top: -80px;
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
    max-width: 244px;

    @media and (min-width: 480px) {
        width: 30vw;
    }
`;

export const HorsesRight = styled.img`
    position: absolute;
    bottom: 5%;
    right: -48px;
    max-width: 75%;
    max-height: 244px;
    object-fit: contain;

    @media (min-width: 480px) {
        max-height: 288px;
    }

    @media (min-width: 768px) {
        max-height: 322px;
        right: 10%;
    }

    @media (min-width: 1024px) {
        right: 15%;
    }

    @media (min-width: 1200px) {
        right: 25%;
    }
`;
