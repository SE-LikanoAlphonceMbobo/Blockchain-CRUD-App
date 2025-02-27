import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UpdateStudent = ({ contract, refreshStudents }) => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [yearOfAdmission, setYearOfAdmission] = useState("");
  const [contacts, setContacts] = useState("");
  const [village, setVillage] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentData = await contract.getStudent(id);
        setStudent(studentData);
        setName(studentData.name);
        setSurname(studentData.surname);
        setYearOfAdmission(studentData.yearOfAdmission.toString());
        setContacts(studentData.contacts);
        setVillage(studentData.village);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    if (contract) {
      fetchStudent();
    }
  }, [contract, id]);

  const handleUpdate = async () => {
    try {
      const tx = await contract.updateStudent(
        id,
        name,
        surname,
        yearOfAdmission,
        contacts,
        village
      );
      await tx.wait();
      alert(`Student ID ${id} updated successfully!`);
      refreshStudents();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div>
      <h3>Update Student</h3>
      {student && (
        <>
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
        </>
      )}
    </div>
  );
};

export default UpdateStudent;
