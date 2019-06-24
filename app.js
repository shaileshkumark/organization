const express=require('express');
const app=express();
const connection=require('./connection');
app.use(express.json());
app.get('/employee',(req,res)=>{
    connection.query('select * from Employee',(err,row,column)=>{
        if(!err) res.json(row);
        else
            res.status(400).json(err);
    });
});
app.get('/employee/:emp_id',(req,res)=>{
    connection.query('select * from Employee where emp_id=?', [req.params.emp_id],
    (err,row,column)=>{
        if(!err) res.json(row);
        else
            res.status(400).json(err);

    });
});
app.listen(3000,()=>{
    console.log("listening to 3000");
});