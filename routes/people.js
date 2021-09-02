const express=require('express')
const Router=express.Router()
const mysqlconnection=require('../connection')


// to get all contents of table
Router.get("/",(req,res)=>{
    mysqlconnection.query(`SELECT * FROM people`,(err,rows,fields)=>{
        if(!err){
            console.log(rows)
            return res.send(rows);
            
        }
        else
        {
            console.log(err);
        }
    })

})



// to create a new details in table
Router.post("/create",(req,res)=>{
    const { id,name,technology}=req.body
    mysqlconnection.query(`INSERT INTO people  VALUES ( ${id},"${name}", "${technology}" )`,(err,rows,fields)=>{
        if(!err){
            console.log(rows)
            return res.send(rows);
            
        }
        else
        {
            console.log(err);
        }
    })

})


// to delete info from table
Router.delete("/delete/:id",(req,res)=>{
    const { id}=req.params
    mysqlconnection.query(`Delete from people where id=${id} `,(err,rows,fields)=>{
        if(!err){
            console.log(rows)
            return res.send(rows);
            
        }
        else
        {
            console.log(err);
        }
    })
})


// to update the details in the table 
Router.put("/update",(req,res)=>{
    const { id,name,technology}=req.body
    mysqlconnection.query(`update  people set name="${name}", technology="${technology}" where id=${id} `,(err,rows,fields)=>{
        if(!err){
            console.log(rows)
            return res.send(rows);
            
        }
        else
        {
            console.log(err);
        }
    })
})

module.exports=Router;