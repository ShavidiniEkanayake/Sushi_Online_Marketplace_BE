import mongoose from 'mongoose'
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
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
    }
})

const Product = mongoose.model("Product",ProductSchema);

export default Product