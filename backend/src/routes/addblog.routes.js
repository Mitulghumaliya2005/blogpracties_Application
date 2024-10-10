import { Router } from "express"
import { addblog } from "../controllers/addblog.controllers.js"

const router = Router()

router.route("/addblog").post(addblog)

export default router