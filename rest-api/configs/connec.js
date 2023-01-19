const mongoose = require ('mongoose');
require("dotenv").config({ path: __dirname + "/configs/.env" });

const conndb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,
            useUnifiedTopology: true,} );
        console.log('we are connected to the db');
    } catch (error) {
       console.log(error); 
    }
}

module.exports = conndb