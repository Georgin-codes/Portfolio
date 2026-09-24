import express from 'express'
import { serveProjects, sendMail} from './controller.js'

export const renderRouter = express.Router()
export const contactRouter = express.Router()


renderRouter.get("/projects", serveProjects)
contactRouter.post("/submit", sendMail)

