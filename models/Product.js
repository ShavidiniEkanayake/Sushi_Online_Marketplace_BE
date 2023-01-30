const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
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

module.exports = Product = mongoose.model("Product",ProductSchema);