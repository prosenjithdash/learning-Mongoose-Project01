import dotenv from 'dotenv'
import path from 'path'


dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {

    port:8000,
    database_url: 'mongodb+srv://admin-um:ADMIN123456@cluster0.kybpity.mongodb.net/learning-Mongoose-Project01?retryWrites=true&w=majority&appName=Cluster0'



    // port: process.env.PORT,
    // database_url: process.env.DATABASE_URL


}