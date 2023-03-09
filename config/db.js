const mongoose = require("mongoose");
const config = require("config");
const db = config.get('mongoURI');

const connectDB = () => {
    console.log("s");
    try{
        mongoose.set("strictQuery",true);
        mongoose.connect(db, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDB is Connected:");
    }catch(err){
        console.log("ds");
        console.log(err.message);
        process.exit(1);
    }
}


module.exports = connectDB;