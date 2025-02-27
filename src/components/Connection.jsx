import { useState, useEffect } from "react";
import { ethers } from "ethers";

const Connection = ({ onWalletConnected }) => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.error("MetaMask is not installed!");
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        onWalletConnected(accounts[0]);
        console.log("Wallet already connected:", accounts[0]);
        return;
      }

      // Request wallet connection if not already connected
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setAccount(address);
      onWalletConnected(address);
      console.log("Wallet connected:", address);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  return (
    <div>
      <h2>Blockchain Student Registry</h2>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Connection;
