import Lecture from "../models/Lecture.js";

export const createLecture = async (req, res, next) => {
    const newLecture = new Lecture(req.body);

    try {
        const savedLecture = await newLecture.save();
        res.status(200).json(savedLecture);
    } catch (err) {
        next(err);
    }
};

export const updateLecture = async (req, res, next) => {
    try {
        const updatedLecture = await Lecture.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedLecture);
    } catch (err) {
        next(err);
    }
};

export const deleteLecture = async (req, res, next) => {
    try {
        await Lecture.findByIdAndDelete(req.params.id);
        res.status(200).json("Lecture has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getLecture = async (req, res, next) => {
    try {
        const lecture = await Lecture.findById(req.params.id);
        res.status(200).json(lecture);
    } catch (err) {
        next(err);
    }
};

export const getLectures = async (req, res, next) => {
    try {
        const lectures = await Lecture.find(req.params.id).limit(req.query.limit);
        res.status(200).json(lectures);
    } catch (err) {
        next(err);
    }
};
