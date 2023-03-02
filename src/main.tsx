import "./index.css";

import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import App from "./App";

const network = mainnet;

const { chains, provider, webSocketProvider } = configureChains(
    [network],
    [
        alchemyProvider({
            apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
            priority: 0,
            weight: 1,
        }),
        publicProvider({ priority: 1, weight: 2 }),
    ]
);

const client = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "web3Modal", chains }),
    provider,
    webSocketProvider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(client, chains);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <>
            <WagmiConfig client={client}>
                <App />
            </WagmiConfig>

            <Web3Modal
                projectId={import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID}
                ethereumClient={ethereumClient}
            />
        </>
    </React.StrictMode>
);
