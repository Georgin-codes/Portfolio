import express from 'express'
import { serveProjects } from './controller.js' 
export const router = express.Router()

router.get("/projects", serveProjects)
