import './App.css'
import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';
import ShowSolBalance from './ShowSolBalance';
import SignMessage from './SignMessage';
import SendTokens from './SendTokens';


function App() {
    const endpoint = "https://api.devnet.solana.com"

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <WalletMultiButton />
                        <WalletDisconnectButton />
                    </div>
                    <main>
                        <h1> This is Solana Faucet </h1>
                        <h1>Enter amount to receive airdrop</h1>
                        <Airdrop />
                        <hr></hr>
                        <ShowSolBalance />
                        <hr></hr>
                        <h1>Signing message</h1>
                        <SignMessage />
                        <h1>Send Solana</h1>
                        <SendTokens />
                       </main>
                    {/* <RequestAirdrop />
          <ShowSolBalance /> */}
                    {/* <Tokens /> */}
                    {/* <SignMessage />
          <SendTokens /> */}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default App
