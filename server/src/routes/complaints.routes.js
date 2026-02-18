import express from "express";
import { changeJsonToArr, writeFile } from "../fsFile/fsFunction.js";
import { getAdminToken, getDAtaFromCli, getDataSortedForAdmin } from "../controllers/complaints.controller.js";
import { config } from "dotenv";
import {
  validPasswords,
  verifyToken,
} from "../middlewares/requireAdminAuth.js";
import jwt from "jsonwebtoken";
config();
const router = express.Router();
const PATH_TO_DATA = "src/db/data.json";


router.post("/complaints", getDAtaFromCli);

router.post("/admin/login", validPasswords, getAdminToken);

router.get("/complaints", verifyToken, getDataSortedForAdmin);

export default router;


