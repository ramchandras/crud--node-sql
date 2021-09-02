# crud--node-sql
this project perform crud operation using database and node.
for this project we need to install following dependencies 
npm init (for creating node modules )
npm install express 
npm install mysql (database)
npm install body-parser 

initially create a connection between the server and the database .
then create a database in mysql workbench using create schema option .
then in the database created add a table with name and values for it. 

next using node first check connection to the database providing correct hostname,user,password and database name provided in mysql.

then perform the crud operation like create,update,delete,read on the table values given in database .

the output can be obtained through postman app on https://localhost:3000/people.
