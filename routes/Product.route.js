const express = require("express");
const router = express.Router();

const {
    addItem,
} = require("../controllers/Product.controller");

router.post("/addItem",addItem);

module.exports = router;