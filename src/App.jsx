import { useState } from "react";
import { ethers } from "ethers";
import Connection from "./components/Connection";
import RegisterStudent from "./components/RegisterStudent";
import DisplayStudents from "./components/DisplayStudents";
import UpdateStudent from "./components/UpdateStudent"; // Import UpdateStudent
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

  const refreshStudents = () => {
    // Trigger re-fetching students from the contract
    console.log("Refreshing students...");
  };

  return (
    <div>
      <Connection onWalletConnected={initializeContract} />
      {contract && (
        <>
          <RegisterStudent contract={contract} refreshStudents={refreshStudents} />
          <UpdateStudent contract={contract} refreshStudents={refreshStudents} /> {/* Add UpdateStudent */}
          <DisplayStudents contract={contract} />
        </>
      )}
    </div>
  );
};

export default App;
