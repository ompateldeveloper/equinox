import mongoose from "mongoose";

export default async function connectMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log('connnected to mdb');
        })
    } catch (error) {
        console.log(error);
    }
}