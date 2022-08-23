import styled from "styled-components";

export const Wrapper = styled.div<{ $fullscreen: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0;
    min-width: 100%;
    color: ${({ theme }) => theme.colors.blackGrey};
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
    max-width: 48px;
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
    max-height: 25vh;
    overflow-y: auto;
`;

export const FenceContainer = styled.div`
    position: absolute;
    width: 200vw;
    left: -50vw;
    bottom: 33%;
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

export const FooterContainer = styled.div`
    display: flex;
    min-width: 100%;
    padding: 0 0 2rem 0;
`;

export const GateColumn = styled.div<{ flex?: number }>`
    display: flex;
    flex-direction: column;
    min-width: 15%;
    overflow: hidden;
    flex: 0;
    width: 0;
    ${({ flex }) => flex && `flex: ${flex};`}

    @media and (min-width: 600px) {
        min-width: 20%;
    }
`;

export const FooterColumn = styled.div<{ flex?: number }>`
    display: flex;
    flex-direction: column;
    min-width: 15%;
    overflow: hidden;
    flex: 1 1 0;
    width: 0;
    ${({ flex }) => flex && `flex: ${flex};`}

    @media and (min-width: 600px) {
        min-width: 20%;
    }
`;

export const HorsesLeft = styled.img`
    max-width: 75%;
    margin: auto auto 2rem -2rem;
`;

export const HiddenHorse = styled.img`
    max-width: 100%;
    max-height: 144px;
    padding: 5rem 0 3rem 0;
    margin: 2rem;
`;

export const HorsePlatform = styled.img`
    max-width: 100%;
    margin: 0 auto;
`;

export const HorsesRight = styled.img`
    max-width: 75%;
    margin: auto -2rem 0 auto;
`;
