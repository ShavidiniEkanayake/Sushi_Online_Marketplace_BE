const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
    vendorId:{
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    oboutYou: {
        type: String,
    }
})

module.exports = Vendor = mongoose.model("Vendor",VendorSchema);