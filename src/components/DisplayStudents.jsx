import { useEffect, useState } from "react";

const DisplayStudents = ({ contract }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const totalStudents = await contract.studentCount();
        const studentList = [];

        for (let i = 1; i <= totalStudents; i++) {
          const student = await contract.students(i);
          studentList.push(student);
        }

        setStudents(studentList);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    if (contract) {
      fetchStudents();
    }
  }, [contract]);

  return (
    <div>
      <h2>Student List</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <p>ID: {student.id.toString()}</p>
              <p>Name: {student.name}</p>
              <p>Surname: {student.surname}</p>
              <p>Year of Admission: {student.yearOfAdmission.toString()}</p>
              <p>Contacts: {student.contacts}</p>
              <p>Village: {student.village}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default DisplayStudents;
