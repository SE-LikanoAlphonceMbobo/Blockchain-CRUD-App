import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ethers } from "ethers";
import Connection from "./components/connection";
import RegisterStudent from "./components/RegisterStudent";
import DisplayStudents from "./components/DisplayStudents";
import UpdateStudent from "./components/UpdateStudent";
import DeleteStudent from "./components/DeleteStudent";
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
    <Router>
      <div>
        <Connection onWalletConnected={initializeContract} />

        <nav>
          <ul>
            <li>
              <Link to="/">Register Student</Link>
            </li>
            <li>
              <Link to="/students">View Students</Link>
            </li>
          </ul>
        </nav>

        {contract && (
          <Routes>
            <Route path="/" element={<RegisterStudent contract={contract} refreshStudents={refreshStudents} />} />
            <Route path="/students" element={<DisplayStudents contract={contract} />} />
            <Route path="/update/:id" element={<UpdateStudent contract={contract} refreshStudents={refreshStudents} />} />
            <Route path="/delete/:id" element={<DeleteStudent contract={contract} refreshStudents={refreshStudents} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
