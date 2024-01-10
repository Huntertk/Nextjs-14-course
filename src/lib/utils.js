import mongoose  from "mongoose"

const connection = {}

export const connectToDb = async () => {
    try {
        if(connection.isConnected){
            console.log("Database Already Connected.......");
            return;
        }
        const db =  await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connections[0].readyState
        console.log("Database Connected.....");
    } catch (error) {
        console.log(error);   
        throw new Error(error)    
    }
}