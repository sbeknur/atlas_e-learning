import express from "express";
import {
    countByCity,
    countByType,
    createCourse,
    deleteCourse,
    getCourse,
    getCourses,
    updateCourse,
} from "../controllers/Course.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, verifyAdmin, createCourse);
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateCourse);
//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteCourse);
//GET
router.get("/find:id", verifyToken, getCourse);
//GET All
router.get("/", getCourses);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
