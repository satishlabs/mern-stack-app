const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define collection and schema
let Course = new Schema(
    {
        courseId: { type: String },
        courseName: { type: String },
        duration: { type: String },
        trainer: { type: String },
        enrollments: { type: Number },
    },
    { collection: "mycourses" }
);
module.exports = mongoose.model("Course", Course); 