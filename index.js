const express  = require('express');
const dotenv = require('dotenv');
//const {connect} = require('mongoose');
var mongoose = require('mongoose');
const Product = require('./Models/product');
dotenv.config();
// connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser:true, useUnifiedTopology:true},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('DB connection established');
//     }
// });

mongoose.connect(process.env.DB_CONNECTION_STRING).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json);

//http://localhost:8000/products
app.post('/products',async (req,res)=>{
    const product = req.body;

    try{
        const productEntity = new Product({
            name:product.name,
            description:product.description,
            price:product.price,
            quantity:product.quantity
        });
        await productEntity.save();
        res.json(productEntity);
    }catch(error){
        res.status(500).json({error:error.message});
    }
})


app.get('/test',(req,res)=>{
    res.json([
        {name:'monkey',age:100},
        {name:'donkey',age:150}
    ]);
});


app.post('/products',(req,res)=>{
    const product = req.body;
})
app.listen(process.env.PORT,()=>{
    console.log('listening to port 8000');
});