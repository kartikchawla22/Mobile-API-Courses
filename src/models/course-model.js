const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    CourseName: {
        type: String,
        required: true,
    },
    CourseID: {
        type: Number,
        required: true,
        unique: true
    },
    CourseDescription: {
        type: String,
        required: true
    }
})

const model = mongoose.model("Courses", courseSchema);

module.exports = model;