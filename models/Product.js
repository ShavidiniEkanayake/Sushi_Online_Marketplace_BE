const mongoose =  requir("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: String,
    },
    avalilableQTY: {
        type : Number,
    },
    image: {
        type: String,
    }
})

module.exports = Product = mongoose.module("Product");