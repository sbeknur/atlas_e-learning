import express from "express";
import {
    createLecture,
    deleteLecture,
    getLecture,
    getLectures,
    updateLecture,
} from "../controllers/Lecture.js";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, verifyAdmin, createLecture);
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateLecture);
//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteLecture);
//GET
router.get("/:id", getLecture);
//GET All
router.get("/", getLectures);

export default router;
