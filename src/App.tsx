import { useWeb3Modal, Web3Button } from "@web3modal/react";
import { ethers } from "ethers";
import { useState } from "react";
import { useAccount, useContractRead, useDisconnect } from "wagmi";

import reactLogo from "./assets/react.svg";
import { abi, address } from "./contract/VortexFoundersPacks";

function App() {
    const { isOpen, open } = useWeb3Modal();
    const { disconnect } = useDisconnect();
    const { isConnected } = useAccount();

    const { data: price } = useContractRead({
        address,
        abi,
        functionName: "vortexPrice",
    });

    return (
        <div className="flex min-h-screen flex-col">
            <header>
                <nav className="fixed flex h-16 w-full items-center justify-end gap-5 bg-slate-800 px-5">
                    <Web3Button />
                    <button
                        className="h-10 items-center justify-center rounded-lg bg-slate-600 px-3 text-white"
                        onClick={isConnected ? () => disconnect() : () => open()}
                    >
                        {isConnected ? "My Disconnect" : isOpen ? "Connecting..." : "My Connect"}
                    </button>
                </nav>
            </header>
            <main className="mt-16 flex grow flex-col items-center justify-center gap-10 bg-slate-300">
                <h1 className="text-4xl">Vite + React + TS + ESLint + Prettier + Tailwind</h1>
                <div className="flex">
                    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                        <img src="/vite.svg" className="h-28" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="h-28 animate-spin-slow" alt="React logo" />
                    </a>
                </div>
                <div>
                    <p>Vortex Price is: {ethers.utils.formatEther(price ?? 0)} ETH</p>
                </div>
            </main>
        </div>
    );
}

export default App;
