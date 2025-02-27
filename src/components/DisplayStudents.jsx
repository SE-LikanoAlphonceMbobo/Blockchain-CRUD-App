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
        <table border="1" cellPadding="8" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Year of Admission</th>
              <th>Contacts</th>
              <th>Village</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id.toString()}</td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.yearOfAdmission.toString()}</td>
                <td>{student.contacts}</td>
                <td>{student.village}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default DisplayStudents;
