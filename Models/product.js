const {Schema,model}=require('mongoose');

const productSchema =new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    quantity:{
        type: Number,
        require:true
    },
    price: {
        type:Number,
        require:true
    }
});

module.exports = model('Product',productSchema);