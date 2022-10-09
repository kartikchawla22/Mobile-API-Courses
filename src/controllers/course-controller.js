const courseModel = require("../models/course-model");
const response = require("../utils/response");
const exampleData = require("../utils/example-data.json");

(async () => {
  for (data of exampleData) {
    const { CourseID, CourseName, CourseDescription } = data;
    try {
      const course = await courseModel.create({
        CourseID,
        CourseName,
        CourseDescription,
      });
      console.log(`data inserted for CourseID: ${CourseID}`);
    } catch (error) {
      console.log(`data already exists for CourseID: ${CourseID}`);
    }
  }
})();

exports.getCourse = async (req, res) => {
  try {
    const { courseID } = req.params;
    const course = await courseModel.findOne({ CourseID: courseID });
    return response({ res, data: course });
  } catch (error) {
    response({ res, error });
  }
};

// Update
exports.updateCourse = async (req, res) => {
  try {
    const { CourseID, CourseName, CourseDescription } = req.body;
    const course = await courseModel.findOneAndUpdate(
      { CourseID },
      { CourseName, CourseDescription },
      { new: true }
    );
    return response({ res, data: course });
  } catch (error) {
    response({ res, error });
  }
};

// Get All
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();
    return response({ res, data: courses.length ? courses : null });
  } catch (error) {
    response({ res, error });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { courseID } = req.params;
    const course = await courseModel.deleteOne({ courseID });
    return response({ res, data: course });
  } catch (error) {
    response({ res, error });
  }
};

exports.insertCourse = async (req, res) => {
  try {
    const { CourseID, CourseName, CourseDescription } = req.body;

    const course = await courseModel.create({
      CourseID,

      CourseName,

      CourseDescription,
    });

    return response({ res, data: course });
  } catch (error) {
    response({ res, error });
  }
};
