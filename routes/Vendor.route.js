const express = require("express");
const router = express.Router();

const {
    addVendor
} = require("../controllers/Vendors.controller");

router.post("/addVendor",addVendor);

module.exports = router;