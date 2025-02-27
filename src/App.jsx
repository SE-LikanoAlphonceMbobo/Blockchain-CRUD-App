import { useState } from "react";
import { ethers } from "ethers";
import Connection from "./components/connection";
import RegisterStudent from "./components/RegisterStudent";
import DisplayStudents from "./components/DisplayStudents";
import { contractAddress, contractAbi } from "./utils/abi";

const App = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  const initializeContract = async (walletAddress) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
    setContract(contractInstance);
    setAccount(walletAddress);
  };

  return (
    <div>
      <Connection onWalletConnected={initializeContract} />
      {contract && (
        <>
          <RegisterStudent contract={contract} refreshStudents={() => {}} />
          <DisplayStudents contract={contract} />
        </>
      )}
    </div>
  );
};

export default App;
