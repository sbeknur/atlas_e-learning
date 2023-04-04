import Course from "../models/Course.js";

export const createCourse = async (req, res, next) => {
    const newCourse = new Course(req.body);

    try {
        const savedCourse = await newCourse.save();
        res.status(200).json(savedCourse);
    } catch (err) {
        next(err);
    }
};

export const updateCourse = async (req, res, next) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCourse);
    } catch (err) {
        next(err);
    }
};

export const deleteCourse = async (req, res, next) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.status(200).json("Course has been deleted");
    } catch (err) {
        next(err);
    }
};

export const getCourse = async (req, res, next) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    } catch (err) {
        next(err);
    }
};

export const getCourses = async (req, res, next) => {
    try {
        const courses = await Course.find(req.params.id);
        res.status(200).json(courses);
    } catch (err) {
        next(err);
    }
};

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Course.countDocuments({ city: city });
            })
        );
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

export const countByType = async (req, res, next) => {
    try {
        const developmentCount = await Course.countDocuments({ type: "development" });
        const businessCount = await Course.countDocuments({ type: "business" });
        const designCount = await Course.countDocuments({ type: "design" });
        const marketingCount = await Course.countDocuments({ type: "marketing" });

        res.status(200).json([
            { type: "developments", count: developmentCount },
            { type: "businesses", count: businessCount },
            { type: "designs", count: designCount },
            { type: "marketings", count: marketingCount },
        ]);
    } catch (err) {
        next(err);
    }
};
