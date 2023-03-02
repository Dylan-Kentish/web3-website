import "./App.css";

import { useWeb3Modal, Web3Button } from "@web3modal/react";
import { ethers } from "ethers";
import { useState } from "react";
import { useAccount, useContractRead, useDisconnect } from "wagmi";

import reactLogo from "./assets/react.svg";
import { abi, address } from "./contract/VortexFoundersPacks";

function App() {
    const [count, setCount] = useState(0);
    const { isOpen, open } = useWeb3Modal();
    const { disconnect } = useDisconnect();
    const { isConnected } = useAccount();

    const { data: price } = useContractRead({
        address,
        abi,
        functionName: "vortexPrice",
    });

    return (
        <>
            <header>
                <nav className="nav">
                    <Web3Button />
                    <button
                        onClick={
                            isConnected ? () => disconnect() : () => open()
                        }
                    >
                        {isConnected
                            ? "My Disconnect"
                            : isOpen
                            ? "Connecting..."
                            : "My Connect"}
                    </button>
                </nav>
            </header>
            <main className="App">
                <div>
                    <a
                        href="https://vitejs.dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    <a
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <p>
                        Vortex Price is: {ethers.utils.formatEther(price ?? 0)}{" "}
                        ETH
                    </p>
                </div>
                <div className="card">
                    <button onClick={() => setCount(count => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </main>
        </>
    );
}

export default App;
