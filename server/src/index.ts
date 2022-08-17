import express from 'express';
import dbconnect from './db/dbconnect';
import  router from './routes/AuthRoute'

const app = express();

 app.get('/',(req,res)=>{
     res.send('server is online')
 });
app.use(express.json())
 app.use('/api',router)



dbconnect();

app.listen(8000,()=>{
    console.log('Backend is working')
});
