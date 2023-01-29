const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin.model");
const jwt = require("jsonwebtoken");
const config = require("config");

const addItem = (req, res, next)=>{

    const Item = new ProductModel({
    //   adminId: req.query.adminId,
      name: req.body.name,
      description: req.body.description,
    });
  
    try{
      Item.save();
      res.status(200).json(
        {
          succuss: true,
          message: 'Insertion succussfull',
          payload: {}
        }
      );
    }
    catch (error) {
      res.status(400).json(
        {
          message: 'Cannot add data right now!'
        }
      );
    }
  };


module.exports = {addItem};