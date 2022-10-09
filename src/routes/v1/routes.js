var express = require('express');
var router = express.Router();
var courseController = require("../../controllers/course-controller");

router.route('/getCourse/:courseID')
    .get(courseController.getCourse)

module.exports = router;