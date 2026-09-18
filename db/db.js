import { createClient } from "@supabase/supabase-js"
import "dotenv/config"


export function connectDb(){

    try{
        const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY)
        return client
    }
    catch(error){
        console.log(`Database connection failed, error: ${error.message}`)
        throw error
    }

}

