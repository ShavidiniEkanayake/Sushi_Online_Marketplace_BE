const express = require("express");
const router = express.Router();

const {
    addItem,viewProductById,viewAll
} = require("../controllers/Product.controller");

router.post("/addItem",addItem);
router.get("/viewAll",viewAll);
router.get("/viewProductById",viewProductById);

module.exports = router;