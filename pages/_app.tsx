import React from "react";
import Image from "next/image";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

import "@rainbow-me/rainbowkit/styles.css";

import { publicProvider } from "wagmi/providers/public";
import {
    getDefaultWallets,
    RainbowKitProvider,
    AvatarComponent,
    midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

import { useAccountChange } from "@hooks/useAccountChange";

const { chains, provider } = configureChains(
    [chain.mainnet, chain.rinkeby],
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
    useAccountChange();

    return (
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
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        toastOptions={{
                            style: {
                                fontFamily: "BadMedicine",
                                padding: "8px 16px",
                                borderRadius: 8,
                                background: "url(/cardboard.png)",
                                backgroundColor: "#000",
                                color: "#fff",
                            },
                            success: {
                                iconTheme: {
                                    primary: "#000",
                                    secondary: "#fff",
                                },
                            },
                            loading: {
                                iconTheme: {
                                    primary: "#000",
                                    secondary: "#fff",
                                },
                            },
                            error: {
                                iconTheme: {
                                    primary: "#000",
                                    secondary: "#fff",
                                },
                            },
                        }}
                    />
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig>
        </RecoilRoot>
    );
}

export default MyApp;
