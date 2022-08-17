import express ,{Request, Response} from 'express';
import Employee from '../models/userModel'
const router = express.Router();

//---------------------------------------------adding user----------------------------------------------------------
router.post('/addemp',async(req:Request,res:Response)=>{
    try{
        const data = req.body;
        console.log(data);
        const employee = new Employee(data);
        await employee.save();

        res.status(200).send(employee)
    }catch(err){
        res.status(500).send(err);
    }
})

//-------------------------------------------------getting user--------------------------------------------------------

router.get('/emps',async(req:Request,res:Response)=>{
    try{
        const employees = await Employee.find()
        res.status(200).send(employees);
    }catch(err){
        res.status(500).send(err)
    }
})
router.get('/emps/:id',async(req:Request,res:Response)=>{
    try{
        const id = req.params.id
        const employees = await Employee.findById(id)
        res.status(200).send(employees);
    }catch(err){
        res.status(500).send(err)
    }
})

//-------------------------------------------------updating user-----------------------------------------------------
router.put('/emps/:id',async(req:Request,res:Response)=>{
    const newdata = req.body
    const employee = await Employee.findByIdAndUpdate(req.params.id, {$set:newdata}, {new:true});
    if(!employee) return res.status(404).send('User you are looking for is not found');
    res.send(employee);
})
//-------------------------------------------------deleting user---------------------------------------------------
router.delete('/emps/:id',async(req:Request,res:Response)=>{
    try{
        const employee = await Employee.findById(req.params.id);
        console.log(employee);
    if(!employee) return res.status(404).send('No user found with given id');
    await employee.delete();
    res.send(employee);
    }catch(err){
        console.log(err)
    }

})

export default router;