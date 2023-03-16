const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("CONNECTED TO DATABASE"))
.catch(() => console.log("FAILED TO CONNECT WITH DATABASE"));