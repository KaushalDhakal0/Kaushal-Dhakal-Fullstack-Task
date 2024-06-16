const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const postRoutes = require("./routes/postRoutes");

const app = express();
const port = process.env.PORT || 8000;

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
