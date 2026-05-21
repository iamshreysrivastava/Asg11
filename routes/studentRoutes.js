const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/students", studentController.getStudents);

router.get("/students/add", studentController.addStudentForm);

router.post("/students/add", studentController.addStudent);

router.get("/students/view/:id", studentController.viewStudent);

router.get("/students/edit/:id", studentController.editStudentForm);

router.post("/students/update/:id", studentController.updateStudent);

router.get("/students/delete/:id", studentController.deleteStudent);

module.exports = router;