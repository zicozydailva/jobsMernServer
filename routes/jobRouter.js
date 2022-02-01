import express from "express";
const router = express.Router();
import {
  createJob,
  deleteJob,
  updateJob,
  getAllJobs,
  showStats,
} from "../controllers/jobControllers.js";

router.get("/", getAllJobs);
router.post("/", createJob);
router.get("/stats", showStats);
router.delete("/:id", deleteJob);
router.patch("/:id", updateJob);

export default router;
