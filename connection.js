const mysql=require('mysql')

var mysqlconnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3001,
    password:'password',
    database:'database',
    multipleStatement:true
})

mysqlconnection.connect((err)=>{
    if(!err)
    {
        console.log('Connected')
    }
    else{
        console.log('connection failed')
    }
})


module.exports=mysqlconnection;