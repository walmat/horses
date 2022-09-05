import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    max-width: 100%;
`;

export const Inner = styled.div<{ isSignedIn: boolean }>`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    flex: 1;
    ${({ isSignedIn }) =>
        !isSignedIn &&
        `
        justify-content: center;
        align-items: center;
    `}
`;
