import { Router } from "express";
import { replaceblog } from "../controllers/replace.controlles.js";

const router = Router()

router.route("/replaceblog").put(replaceblog)

export default router