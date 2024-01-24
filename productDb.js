require("dotenv").config();

const connectDb = require("./db/connect");
const Product = require("./model/productSchema");

const ProductJson = require("./jsondata.json");

const start = async() =>{
    try{
        await connectDb(process.env.uri);
        await Product.create(ProductJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
};

start();