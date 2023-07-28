const mongoose = require('mongoose')
uri = "mongodb+srv://yash11:Yash120033@jewlzzapi.ujvfjb1.mongodb.net/jewlzzapi?retryWrites=true&w=majority";
const connectDB = () => {
    return mongoose.connect(uri,{useNewUrlParser : true, useUnifiedTopology : true}); 
}


module.exports = connectDB;