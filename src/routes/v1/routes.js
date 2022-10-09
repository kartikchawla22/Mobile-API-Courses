var express = require('express');
var router = express.Router();
var courseController = require("../../controllers/course-controller");

router.route('/getCourse/:courseID')
    .get(courseController.getCourse)
router.route('/updateCourse')
    .put(courseController.updateCourse)
router.route('/getAllCourses')
    .get(courseController.getAllCourses)
router
    .route("/deleteCourse/:courseID")

      .delete(courseController.deleteCourse);

 router
      .route("/insertCourse")

      .post(courseController.insertCourse);
    
module.exports = router;
