/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALLET_CONNECT_PROJECT_ID: string;
  readonly VITE_VORTEX_FOUNDERS_PACKS_ADDRESS: `0x${string}`;
  readonly VITE_ALCHEMY_API_KEY: string;
  readonly VITE_CHAIN_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
