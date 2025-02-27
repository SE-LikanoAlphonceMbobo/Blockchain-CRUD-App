import { useState } from "react";

const UpdateStudent = ({ contract, refreshStudents }) => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [yearOfAdmission, setYearOfAdmission] = useState("");
  const [contacts, setContacts] = useState("");
  const [village, setVillage] = useState("");

  const handleUpdate = async () => {
    try {
      const tx = await contract.updateStudent(
        studentId,
        name,
        surname,
        yearOfAdmission,
        contacts,
        village
      );
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Student updated:", studentId);
      refreshStudents(); // Refresh student list after updating
      alert(`Student ID ${studentId} has been updated successfully!`);
    } catch (error) {
      console.error("Error updating student:", error);
      alert("There was an error updating the student. Please try again.");
    }
  };

  return (
    <div>
      <h3>Update Student</h3>
      <input
        type="number"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
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
      <button onClick={handleUpdate}>Update Student</button>
    </div>
  );
};

export default UpdateStudent;
