const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config()
const connectDb = require("./db/connect")

const PORT = process.env.PORT || 5001;
app.use(express.json());

const products_routes = require("./routes/products")

app.use(cors())

app.use("/api/v0",products_routes);

const start = async ()=>{
    try{
        await connectDb(process.env.uri);
        app.listen(PORT, () =>{
            console.log(`Server is running at ${PORT}`);
        });
    } catch(error){
        console.log(error);
    }
}


start()