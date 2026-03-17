const pool = require("../config/db");

// a) CREATE
const addStudent = async (name, grade) => {
  const result = await pool.query(
    `INSERT INTO students (name, grade) 
    VALUES ($1, $2) RETURNING *`,
    [name, grade]
  );
  return result.rows[0];
};

// b) READ
const getAllStudents = async () => {
  const result = await pool.query(
    `SELECT * FROM students`);
  return result.rows;
};

// c) UPDATE
const updateStudentGrade = async (id, grade) => {
  const result = await pool.query(
    `UPDATE students 
    SET grade = $1 
    WHERE id = $2 
    RETURNING *`,
    [grade, id]
  );
  return result.rows[0];
};

// d) DELETE
const deleteStudent = async (id) => {
  const result = await pool.query(
    `DELETE FROM students 
    WHERE id = $1 RETURNING *`,
    [id]
  );
  return result.rows[0];
};

module.exports = {
  addStudent,
  getAllStudents,
  updateStudentGrade,
  deleteStudent,
};