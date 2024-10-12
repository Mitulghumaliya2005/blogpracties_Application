import Router from "express"
import { fetchblogs } from "../controllers/fetchblogs.controllers.js"

const router = Router()

router.route("/").get(fetchblogs)

export default router