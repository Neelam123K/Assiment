const mongoose = require("mongoose")
const url = "mongodb+srv://neelam:neelam123@cluster0.srzt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

function connectDB() {
    mongoose.connect(url)
    .then(() => {
        console.log("Db connected")
    })

    .catch(() => {
        console.log("DB not connected")
    })
}


module.exports = {
    connectDB
}