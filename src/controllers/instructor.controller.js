const Course = require("../models/course.model");

const addCourse = async (req, res, next) => {
    try {
        const course = await Course.create({...req.body, instructor: req.user._id});
        res.status(200).json({ success: true, course });
    } catch (error) {
        next(error);
    }
}

const instructorCourses = async (req, res, next) => {
    try {
        const courses = await Course.find({instructor: req.user._id});
        const totalCourse = courses.length;
        
        if(!courses || totalCourse === 0) {
            return res.status(404).json({ success: false, msg: "No courses found" });
        }

        res.status(200).json({ success: true, totalCourse, courses });
    } catch (error) {
        next(error);
    }
}

const updateCourse = async (req, res, next) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {new: true});
        if(!course) {
            return res.status(404).json({ success: false, msg: "No course found" });
        }
        res.status(200).json({ success: true, course });
    } catch (error) {
        next(error);
    }
}

const removeCourse = async (req, res, next) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.courseId);
        if(!course) {
            return res.status(404).json({ success: false, msg: "No course found" });
        }
        res.status(200).json({ success: true, course });
    }catch (error) {
        next(error);
    }
}

module.exports = {
    addCourse,
    instructorCourses,
    updateCourse,
    removeCourse
}