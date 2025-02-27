import { useState } from "react";
import { ethers } from "ethers";
import Connection from "./components/connection";
import RegisterStudent from "./components/RegisterStudent";
import DisplayStudents from "./components/DisplayStudents";
import { contractAddress, contractAbi } from "./utils/abi";

const App = () => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [students, setStudents] = useState([]);

  const initializeContract = async (walletAddress) => {
    try {
      // Correctly set up the provider using BrowserProvider
      const provider = new ethers.BrowserProvider(window.ethereum);  // Using BrowserProvider
      const signer = await provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
      setContract(contractInstance);
      setAccount(walletAddress);
      console.log("Contract initialized");
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  const refreshStudents = async () => {
    if (contract) {
      try {
        const studentCount = await contract.studentCount();
        const studentList = [];
        for (let i = 0; i < studentCount; i++) {
          const student = await contract.students(i);
          studentList.push(student);
        }
        setStudents(studentList);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
  };

  return (
    <div>
      <Connection onWalletConnected={initializeContract} />
      {contract && (
        <>
          <RegisterStudent contract={contract} refreshStudents={refreshStudents} />
          <DisplayStudents students={students} />
        </>
      )}
    </div>
  );
};

export default App;
