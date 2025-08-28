import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://manshi:manshi123456@cluster0.cjncsbe.mongodb.net/Chillin-Bites').then(()=>console.log("DB Connected"));
}