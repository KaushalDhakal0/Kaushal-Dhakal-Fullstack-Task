const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
dotenv.config();

const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 8000;

// ==Set up MongoDb and uncomment this code below.
// connectDB()


app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
