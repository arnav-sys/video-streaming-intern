const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    likes:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now
    },
    link:{
        type:String,
        required:true
    }

})

module.exports =  mongoose.model("video",VideoSchema);