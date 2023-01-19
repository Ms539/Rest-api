const express = require ('express');
const conndb = require('./configs/connec');
const appRoutes = require('./routes/appRoutes');
const server = express();
require("dotenv").config({ path: __dirname + "/configs/.env" });
const port = process.env.PORT || 5000;

//using forma json in the req and res
server.use(express.json());
server.use("/",appRoutes)


//call connection to db
conndb();

//listen server
server.listen(port,(err)=>{
err?console.log(err):console.log(`the server is connected on http://localhost:${port}`);
})

