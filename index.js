const express = require("express")
const app = express()
const cors = require("cors")
const { connectDB } = require("./src/product")
const {productRouter} = require('./src/Routes/productRouter');
const { customerRouter } = require("./src/Routes/customerRouter")


connectDB()
app.use(cors())
app.use(express.json())
app.use(customerRouter)
app.use(productRouter)


app.listen(8080, () => {
    console.log("Server Connected to PORT 8080.")
})