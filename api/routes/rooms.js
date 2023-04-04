import express from "express";
import {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
} from "../controllers/room.js";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:cinemaid", verifyToken, verifyAdmin, createRoom);
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:cinemaid", verifyToken, verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GET All
router.get("/", getRooms);

export default router;
