import styled from "styled-components";

export const Wrapper = styled.div<{ $fullscreen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
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
    font-size: 1.25rem;
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

export const Container = styled.div`
    text-align: center;

    h1 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2rem;
        padding-bottom: 0.75rem;
    }
    p {
        font-size: 1.25rem;
        font-weight: 300;
    }
`;

export const SlingersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    height: auto;
    justify-content: center;
    max-height: 10vh;
    min-height: 88px;
    overflow-y: auto;
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
    max-height: 88px;
    margin: 0.5rem;
    position: relative;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const SelectedSlinger = styled.img`
    position: absolute;
    bottom: 8px;
    right: 8px;
    max-height: 16px;
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
    max-height: 88px;
    object-fit: contain;
    background-color: transparent;
    opacity: ${({ $isSelected, $isUsed }) =>
        $isSelected || $isUsed ? 1 : 0.6};
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
    bottom: 25%;
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
    bottom: 5%;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

export const Horseshoe = styled.img`
    width: 48px;
    position: relative;
    top: 20px;
    margin: 0 auto;
`;

export const HorsePlatform = styled.img`
    width: 40vw;
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
