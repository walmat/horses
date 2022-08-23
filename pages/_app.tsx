import React from "react";
import Image from "next/image";
import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import { RecoilRoot } from "recoil";

import "@rainbow-me/rainbowkit/styles.css";

import { publicProvider } from "wagmi/providers/public";
import {
    getDefaultWallets,
    RainbowKitProvider,
    AvatarComponent,
    midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

const { chains, provider } = configureChains(
    [chain.mainnet],
    [publicProvider()],
);

const { connectors } = getDefaultWallets({
    appName: "Horses",
    chains,
});

const client = createClient({
    autoConnect: true,
    connectors,
    provider,
});

const CustomAvatar: AvatarComponent = ({ ensImage, size }) => {
    return ensImage ? (
        <Image
            src={ensImage}
            width={size}
            height={size}
            style={{ borderRadius: 999 }}
        />
    ) : (
        <div
            style={{
                backgroundColor: "#D8D2BF",
                borderRadius: 999,
                height: size,
                width: size,
            }}
        />
    );
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <RecoilRoot>
                <WagmiConfig client={client}>
                    <RainbowKitProvider
                        chains={chains}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        avatar={CustomAvatar}
                        theme={midnightTheme({
                            accentColor: "#000",
                            accentColorForeground: "#fff",
                            borderRadius: "large",
                            fontStack: "system",
                            overlayBlur: "small",
                        })}
                    >
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/* @ts-ignore */}
                        <Component {...pageProps} />
                    </RainbowKitProvider>
                </WagmiConfig>
            </RecoilRoot>
        </StyledThemeProvider>
    );
}

export default MyApp;
