const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment") 


const Schema = mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone_Num:{
        type: String,
        required: true,
    },
    Created_on:{
        type: Date,
        default : Date.now,
    },
    // user_id: String,
})
//  autoIncrement.initialize(mongoose.connection)
//  Schema.plugin(autoIncrement.plugin, "post")
const userModel = mongoose.model("User" ,Schema);
module.exports = userModel; 