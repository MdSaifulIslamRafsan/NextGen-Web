import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        const connection = mongoose.connection;
        connection.on("connected", ()=> {
            console.log("mongoose successfully connected");
        });
        connection.on("error", (error: unknown)=>{
            console.log("mongoose connection error: ", error);
            process.exit(1);
        });
    } catch (error: unknown) {
        console.log(error);
    }
}