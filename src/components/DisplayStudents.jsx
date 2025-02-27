import { useState, useEffect } from "react";

const DisplayStudents = ({ students }) => {
    return (
      <div>
        <h3>Student List</h3>
        <ul>
          {students.length > 0 ? (
            students.map((student, index) => (
              <li key={index}>
                {student.name} {student.surname}
              </li>
            ))
          ) : (
            <p>No students found.</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default DisplayStudents;
  