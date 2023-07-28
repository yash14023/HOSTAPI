const connectDB = require("./db/connect");
const Product = require("./model/product");
const productJson = require("./products.json")
const start = async () => {
    try{
        await connectDB("mongodb+srv://yash11:Yash120033@jewlzzapi.ujvfjb1.mongodb.net/jewlzzapi?retryWrites=true&w=majority")
        await Product.deleteMany() //for del same  query
        await Product.create(productJson);
        console.log("success")
    }catch(error){
        console.log(error)
    }
};
start();