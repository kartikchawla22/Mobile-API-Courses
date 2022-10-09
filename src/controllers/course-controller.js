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
                CourseDescription
            });
            console.log(`data inserted for CourseID: ${CourseID}`);

        } catch (error) {
            console.log(`data already exists for CourseID: ${CourseID}`)
        }
    }
})();

exports.getCourse = async (req, res) => {
    try {
        const { courseID } = req.params;
        const course = await courseModel.findOne({ CourseID: courseID });
        return response({ res, data: course })

    } catch (error) {
        response({ res, error })
    }
}