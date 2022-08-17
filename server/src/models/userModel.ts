import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        max:20,
        min:3,
    },
    email:{
        type:String,
        //required:true,
        max:20,
        unique:true,
    },
    age:{
        type:Number,
        //required:true,
    }
})

const Employee = mongoose.model('employee', employeeSchema);
export default Employee;
