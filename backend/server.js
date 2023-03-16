const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require("cors");

require('dotenv').config();
require("./db/connect");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) =>{
    res.send({
        message: "Home"
    })
})

app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));