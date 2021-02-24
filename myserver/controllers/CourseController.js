const express = require("express");
const mycourseRoute = express.Router();


//let Course = require("../models/Course");
let Course = require("../models/Course");

//localhost:5500/myapi/mycourses
// Get All Courses
mycourseRoute.route("/mycourses").get(
    (req, res) => {
        console.log("/mycourses ---get()");
        Course.find((error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }).sort({ courseId: 1 });
    });


//localhost:5500/myapi/mycourse/{courseId}
// Get Course By Id
mycourseRoute.route("/mycourse/:courseId").get((req, res, next) => {
    console.log("/mycourse/:courseId --- get()");
    Course.findOne({ courseId: req.params.courseId }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});


module.exports = mycourseRoute;

