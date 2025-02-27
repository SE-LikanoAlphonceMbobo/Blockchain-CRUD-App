import { useState, useEffect } from "react";
import { ethers } from "ethers";
// ABI in the utils folder
import { contractAddress, contractAbi } from "../utils/abi";


const Connection = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    surname: "",
    yearOfAdmission: "",
    contacts: "",
    village: ""
  });

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress,contractAbi , signer);

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setContract(contractInstance);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask not detected. Please install it.");
    }
  };

  const fetchStudents = async () => {
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

  const addStudent = async () => {
    if (contract) {
      try {
        const tx = await contract.addStudent(
          newStudent.name,
          newStudent.surname,
          newStudent.yearOfAdmission,
          newStudent.contacts,
          newStudent.village
        );
        await tx.wait();
        fetchStudents();
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };

  return (
    <div>
      <h2>Blockchain Student Registry</h2>
      <button onClick={connectWallet}>
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </button>
      <button onClick={fetchStudents}>Fetch Students</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name} {student.surname}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Surname"
        value={newStudent.surname}
        onChange={(e) => setNewStudent({ ...newStudent, surname: e.target.value })}
      />
      <input
        type="number"
        placeholder="Year of Admission"
        value={newStudent.yearOfAdmission}
        onChange={(e) => setNewStudent({ ...newStudent, yearOfAdmission: e.target.value })}
      />
      <input
        type="text"
        placeholder="Contacts"
        value={newStudent.contacts}
        onChange={(e) => setNewStudent({ ...newStudent, contacts: e.target.value })}
      />
      <input
        type="text"
        placeholder="Village"
        value={newStudent.village}
        onChange={(e) => setNewStudent({ ...newStudent, village: e.target.value })}
      />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default Connection;
