const ProductModel = require("../models/Product");
const config = require("config");

const addItem = (req, res, next) => {
  const Item = new ProductModel({
    vendorId: req.query.vendorId,
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    avalilableQTY: req.body.avalilableQTY,
  });

  try {
    Item.save();
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

//viewAll
const viewAll = (req, res, next) => {
  ProductModel.find()
    .then((Product) => {
      res.status(200).json({
        success: true,
        message: "Read successfuly",
        Product,
      });
    })
    .catch((e) => {
      res.status(400).json({ success: false, message: e.message, payload: {} });
    });
};

//viewAll for profile
const viewProductById = (req, res, next) => {
  
};
module.exports = { addItem, viewAll,viewProductById };
