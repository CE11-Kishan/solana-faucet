import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import {useState} from 'react';


export default function Airdrop() {
    const [count, setCount] = useState(0)
    const wallet = useWallet();
    const { connection } = useConnection()

    //Public key -> Lamport => Call function to airdrop
    const requestAirdrop = async () => {
        console.log(count, wallet.publicKey)
        await connection.requestAirdrop(wallet.publicKey, (count * LAMPORTS_PER_SOL))
        alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    }

    return (
        <>
            <input onChange={(e) => setCount(e.target.value)} type="number" name="solana" style={{ padding: '5px' }} id="solana-amount" />
            <button onClick={requestAirdrop} style={{ padding: '5px', borderRadius: '5px', margin: '10px' }} >Airdrop</button>
        </>
    )
}