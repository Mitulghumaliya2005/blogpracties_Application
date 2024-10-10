import { Router } from "express";
import { editblog } from "../controllers/editblog.controllers.js";

const router = Router()

router.route("/editblog").patch(editblog)

export default router