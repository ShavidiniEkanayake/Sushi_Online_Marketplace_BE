const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const app = express();

//Connect Database
connectDB();

//Using Cors
app.use(cors());

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Online shoping System Backend Api Running"));

//-------------------Product---------------------
app.use("/api/product", require("./routes/Product.route"));

//-------------------Vendor---------------------
app.use("/api/vendors", require("./routes/Vendor.route"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));