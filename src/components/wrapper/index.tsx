import React from "react";
import { useAccount } from "wagmi";
import { Container, Inner } from "./styled";

export const Wrapper: React.FC = ({ children }) => {
    const { address } = useAccount();

    return (
        <Container>
            <Inner isSignedIn={!!address}>{children}</Inner>
        </Container>
    );
};
