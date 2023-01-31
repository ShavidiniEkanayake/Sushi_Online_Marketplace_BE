const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const BuyerSchema = new Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    role:
    {
        type: String,
        enum: ['VENDOR', 'BUYER'],
        default: 'BUYER',
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
})


const User = mongoose.model("User",BuyerSchema);

export default User