const Product = require("../model/product");

const getAllProducts = async (req, res) =>{
    const {company} = req.query;
    const queryObject = {};
    if (company){
        queryObject.company = company;
    }
    const myData = await Product.find(queryObject)
    res.status(200).json({myData})
};
const getAllProductsTesting = async (req, res) =>{
    const myData = await Product.find(req.query)
    res.status(200).json({myData}) }

module.exports ={getAllProducts,getAllProductsTesting};