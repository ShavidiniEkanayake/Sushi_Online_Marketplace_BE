const VendorModel = require("../models/Vendors");

const addVendor = (req, res, next) => {
  const Vendor = new VendorModel({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    oboutYou: req.body.oboutYou,
  });

  try {
    Vendor.save();
    res.status(200).json({
      succuss: true,
      message: "Insertion succussfull",
      payload: {},
    });
  } catch (error) {
    res.status(400).json({
      message: "Cannot add data right now!",
    });
  }
};

module.exports = { addVendor };
