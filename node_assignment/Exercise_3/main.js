const {
  addStudent,
  getAllStudents,
  updateStudentGrade,
  deleteStudent
} = require("./models/studentModels");

const run = async () => {
  try {
    // i) Add a student
    const newStudent = await addStudent("Harsh", "A");
    console.log("Added:", newStudent);

    // ii) Retrieve all students
    const students = await getAllStudents();
    console.log("All Students:", students);

    // iii) Update student's grade
    const updated = await updateStudentGrade(newStudent.id, "A+");
    console.log("Updated:", updated);
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
    // iv) Delete student
    const deleted = await deleteStudent(newStudent.id);
    console.log("Deleted:", deleted);

  } catch (err) {
    console.error(err.message);
  }
};

run();