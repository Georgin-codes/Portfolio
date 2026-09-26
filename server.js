import express from "express"
import { renderRouter, contactRouter } from './routes.js'

const app = express()
const PORT = process.env.PORT || 8000

app.set("trust proxy", 2)
app.use(express.json())
app.use(express.static("public"))
app.use('/api/contact', contactRouter)
app.use('/api', renderRouter)



app.listen(PORT, ()=>{
    console.log(`Listening to port : ${PORT}`)
})