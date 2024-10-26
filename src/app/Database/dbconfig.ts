import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MongoUri as string);
        const connection = mongoose.connection;
        connection.on("connected", ()=> {
            console.log("mongoose successfully connected");
        });
        connection.on("error", (error :any)=>{
            console.log("mongoose connection error: ", error);
            process.exit(1);
        });
    } catch (error :any) {
        console.log(error.message);
    }
}