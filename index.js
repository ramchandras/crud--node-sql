const express=require('express')
const bodyParser=require('body-parser')
const PeopleRoutes=require('./routes/people')
const mysqlconnection=require('./connection')

var app= express();
app.use(bodyParser.json())

app.use("/people",PeopleRoutes)




app.listen(3000);
console.log('server is running on port 3000')