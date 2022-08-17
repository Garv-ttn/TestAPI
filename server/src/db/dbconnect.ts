import mongoose from "mongoose";

const dbconnect = async()=>{
    try{
        await mongoose.connect('mongodb+srv://garvthakur123:garvtomar123@cluster0.lfw13e8.mongodb.net/APITesting?retryWrites=true&w=majority')
        console.log('Connect to database');
    }catch(e){
        console.log(e)
    }
}
export default dbconnect;
