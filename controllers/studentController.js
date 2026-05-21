const Student = require("../models/Student");

exports.getStudents = async (req, res) => {

    const search = req.query.search || "";

    let query = {
        $or: [
            { name: { $regex: search, $options: "i" } },
            { course: { $regex: search, $options: "i" } },
            { city: { $regex: search, $options: "i" } }
        ]
    };

    const students = await Student.find(query);

    res.render("index", {
        students,
        search
    });
};

exports.addStudentForm = (req, res) => {
    res.render("addStudent");
};

exports.addStudent = async (req, res) => {

    try {

        await Student.create(req.body);

        req.flash("success", "Student Added Successfully");

        res.redirect("/students");

    } catch (error) {

        req.flash("error", error.message);

        res.redirect("/students/add");
    }
};

exports.viewStudent = async (req, res) => {

    const student = await Student.findById(req.params.id);

    res.render("viewStudent", { student });
};

exports.editStudentForm = async (req, res) => {

    const student = await Student.findById(req.params.id);

    res.render("editStudent", { student });
};

exports.updateStudent = async (req, res) => {

    try {

        await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { runValidators: true }
        );

        req.flash("success", "Student Updated Successfully");

        res.redirect("/students");

    } catch (error) {

        req.flash("error", error.message);

        res.redirect(`/students/edit/${req.params.id}`);
    }
};

exports.deleteStudent = async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    req.flash("success", "Student Deleted Successfully");

    res.redirect("/students");
};