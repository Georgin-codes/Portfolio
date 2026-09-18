import { connectDb } from "./db/db.js"


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