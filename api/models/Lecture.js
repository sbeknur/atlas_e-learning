import mongoose from "mongoose";
const { Schema } = mongoose;

const LectureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    courses: {
        type: [String],
    },
});

export default mongoose.model("Lecture", LectureSchema);
