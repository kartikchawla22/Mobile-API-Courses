var express = require('express');
var router = express.Router();
var courseController = require("../../controllers/course-controller");

router.route('/getCourse/:courseID')
    .get(courseController.getCourse)
router.route('/updateCourse')
    .put(courseController.updateCourse)
router.route('/getAllCourses')
    .get(courseController.getAllCourses)
    
module.exports = router;
