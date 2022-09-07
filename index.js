const express = require('express')
const app = express()
const PORT = 8000
const cors=require('cors');
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = "mongodb://localhost:27017/Angular";
mongoose.connect(mongoDB, { useNewUrlParser: true });
var users = require("./routes/user.route");
var man = require("./routes/managers.route");

app.listen(PORT, () => console.log("Server started on port ", PORT))

app.use("/users", users);
app.use("/man", man);