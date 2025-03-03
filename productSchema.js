const mongoose = require("mongoose")

const  ProductSchema = new mongoose.Schema({
   name : {
    type : String,
    require : true,
    trim : true
  },
  description : {
    type : String,
    require : true,
    trim : true
  },
  price : {
    type : Number,
    require : true,
    valid : true
  },
  stock : {
    type : Number,
    require : true,
    valid : 0
  },
  category : {
    type : String,
    require : true,
    valid : true
  }
})

const Products = mongoose.model("  Product",   ProductSchema)

module.exports = {
  Products
}