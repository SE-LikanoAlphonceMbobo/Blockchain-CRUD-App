import { useParams } from "react-router-dom";
import { useState } from "react";

const DeleteStudent = ({ contract, refreshStudents }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const tx = await contract.deleteStudent(id);
      await tx.wait();
      alert(`Student ID ${id} has been deleted successfully!`);
      refreshStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("There was an error deleting the student.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Delete Student</h3>
      <p>Are you sure you want to delete student ID {id}?</p>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? "Deleting..." : "Delete Student"}
      </button>
    </div>
  );
};

export default DeleteStudent;
