import { connectDb } from "./db/db.js"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function serveProjects(req, res){

    try{
        const client = connectDb()
        const {data, error} = await client.from("projects")
                                .select()
        if(error){
            console.log(error)
            return res.status(500).json({message:"Error fetching projects"})
        }
        // console.log(data)
        return res.json(data)
    }
    catch(error){
        console.log("Error fetching data from database")
        return res.status(500).json({message:`Error fetching data from database, ${error.message}`})
    }

}


export async function sendMail(req, res){

    console.log(req.body)
    const {name, email, subject, message} = req.body

    if(!name || !email || !subject || !message){
        return res.status(400).json({message:"Name, email, message are required"})
    }

    try{
            const { data, error } = await resend.emails.send({
            from: 'My Portfolio <hello@georgeportfolio.online>',
            to: ['ginutecme@gmail.com'],
            subject: subject,
            html:`  <p>${message}</p>
                    <br>
                    <h3><strong>From,</strong></h3>
                    <p>name</p>
                    <p>email</p>`
            });

            if(error){
                console.log(`resend error: ${error.message}`)
                return res.status(400).json({message:"Something went wrong with sending email"})  
            }
            return res.json({message:"Email sent successfully"})
    }
    catch(error){
        res.status(500).json({message:`Error sending email, ${error.message}`})
    }

}