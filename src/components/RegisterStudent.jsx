import { useState } from "react";

const RegisterStudent = ({ contract, refreshStudents }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [yearOfAdmission, setYearOfAdmission] = useState("");
  const [contacts, setContacts] = useState("");
  const [village, setVillage] = useState("");

  const handleRegister = async () => {
    try {
      const tx = await contract.addStudent(name, surname, yearOfAdmission, contacts, village);
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Student added:", name);
      refreshStudents(); // Refresh student list after registration
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div>
      <h3>Register New Student</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year of Admission"
        value={yearOfAdmission}
        onChange={(e) => setYearOfAdmission(e.target.value)}
      />
      <input
        type="text"
        placeholder="Contacts"
        value={contacts}
        onChange={(e) => setContacts(e.target.value)}
      />
      <input
        type="text"
        placeholder="Village"
        value={village}
        onChange={(e) => setVillage(e.target.value)}
      />
      <button onClick={handleRegister}>Register Student</button>
    </div>
  );
};

export default RegisterStudent;
