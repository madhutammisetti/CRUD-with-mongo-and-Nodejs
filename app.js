/*This file contains programs on communications between server and mongodb 
crud operations through mongodb and server , and  storing , getting 
updating and deleting the data from database  .

Making connection with mongoose */

// ***Start****This is code about getting data from mongodb from routes file

    // const express   = require("express");
    // const app = express();
    // const routes = require("./routes")

    // app.use(routes)

    // app.listen(8080 , ()=>{
    //     console.log("Server runing on port 8080")
    // })

// ***End****This is code about getting data from mongodb from routes file


//Making Connection with Mongoose 

    const express   = require("express");
    const app = express();
    const mongoose = require("mongoose");
    const userroutes = require("./views/userRoutes")


    //this is middleware to use post api work
    app.use(express.json())

    app.use(userroutes)

    const url = "mongodb+srv://madhu:passwordinnotepad@mongo-connection.o5urief.mongodb.net/?retryWrites=true&w=majority"
    // here we need to change password with the database passwors and database username
    
    mongoose.connect(url).then( ()=>{
        console.log("DB Connected")
    }).catch(err=>{
    console.log(err)
    })


     app.listen(8080 , ()=>{
        console.log("Server runing on port 8080")
    })


