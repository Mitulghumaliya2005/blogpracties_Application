import { Router } from "express";
import { deleteblog } from "../controllers/deleteblog.controller.js";

const router = Router();

router.route("/deleteblog").delete(deleteblog)

export default router