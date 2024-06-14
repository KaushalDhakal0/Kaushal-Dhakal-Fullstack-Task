const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

app.use(express.json());

app.get('/', (req,res)=>{
    console.log("==Working==");
    res.json({
        name:"Server setup"
    })
})

app.listen(port, () => console.log(`Server running on port ${port}`));
