import { useState } from "react";

const DeleteStudent = ({ contract, refreshStudents }) => {
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!studentId || isNaN(studentId) || parseInt(studentId) <= 0) {
      alert("Please enter a valid student ID.");
      return;
    }

    setLoading(true);
    setError(null); // Reset previous errors

    try {
      const tx = await contract.deleteStudent(studentId);
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Student deleted:", studentId);
      alert(`Student ID ${studentId} has been deleted successfully!`);
      refreshStudents(); // Refresh the student list after deletion
    } catch (error) {
      console.error("Error deleting student:", error);
      setError("There was an error deleting the student. Please try again.");
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div>
      <h3>Delete Student</h3>
      <input
        type="number"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={handleDelete} disabled={loading}>
        {loading ? "Deleting..." : "Delete Student"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeleteStudent;
