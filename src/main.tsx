import "./styles/globals.css";

import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import App from "@/App";

const apiKey = import.meta.env.VITE_ALCHEMY_API_KEY;
const chainId = import.meta.env.VITE_CHAIN_ID;
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

const chain = chainId === "1" ? mainnet : sepolia;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [chain],
  [
    alchemyProvider({
      apiKey,
    }),
    publicProvider(),
  ]
);

const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, version: 2, projectId }),
  publicClient,
  webSocketPublicClient,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(config, chains);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <WagmiConfig config={config}>
        <App />
      </WagmiConfig>

      <Web3Modal
        projectId={import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
      />
    </>
  </React.StrictMode>
);
