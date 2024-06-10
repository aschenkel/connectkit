import { getDefaultConfig, wallets } from 'connectkit';
import { createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';

const defaultConfig = getDefaultConfig({
  appName: 'ConnectKit Next.js demo',
  chains: [mainnet, polygon, optimism, arbitrum],
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
});

export const config = createConfig({
  ...defaultConfig,
  connectors: [
    ...(defaultConfig.connectors ?? []),
    wallets['bloom'],
    wallets['zerion'],
    wallets['ledgerLive'],
  ],
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}
