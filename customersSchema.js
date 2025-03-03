const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    fillName : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
        trim : true
    },
    registeredAt : {
        type : String,
        default : Date
    }
}, {timestamps : true})

const Customers = mongoose.model("Customer", customerSchema)

module.exports = {
    Customers
}