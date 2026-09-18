import express from "express"

const app = express()
const PORT = 8000

app.use('/',(req, res)=>{
    console.log("hai")
    res.send("Hello IM working")
})


app.listen(PORT, ()=>{
    console.log(`Listening to port : ${PORT}`)
})