import express from 'express'
import { serveProjects, sendMail} from './controller.js'
import { limiter } from './middlewares/middleware.js'

export const renderRouter = express.Router()
export const contactRouter = express.Router()


renderRouter.get("/projects", serveProjects)
contactRouter.post("/submit", (req, res, next) => {
    console.log("IP:", req.ip)
    console.log("Forwarded:", req.headers["x-forwarded-for"])
    next()
}, limiter, sendMail)

