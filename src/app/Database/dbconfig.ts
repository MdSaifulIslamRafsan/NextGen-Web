import mongoose from 'mongoose';
export const contactDB = async() => {
    try {
        await mongoose.connect(process.env.MongoUri as string)
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("mongoose successfully connected");
        })
        connection.on('error', ()=>{
            console.log("mongoose connection error: ", err);
            process.exit(1)
        })

    } catch (error : any) {
        console.log(error);
    }
}