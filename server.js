import express from "express"
import { router } from './routes.js'

const app = express()
const PORT = 8000

app.use(express.static("public"))
app.use('/api', router)


app.listen(PORT, ()=>{
    console.log(`Listening to port : ${PORT}`)
})