const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },

    rollno: {
        type: Number,
        unique: true,
        required: true
    },

    course: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        min: [16, "Age must be greater than 15"]
    },

    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid Email"]
    },

    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Student", studentSchema);