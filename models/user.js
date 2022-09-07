const mongoose = require("mongoose");
let user = new mongoose.Schema(
    {
        name: {
            type: String,
           // required: true
        },
        email: {
            type: String,
           // required: true,
        },
        password: {
            type: String,
           // required: true

        },
        id: {
            type: Number,
           // required: true

        },
        img: {
            type: String ,
            //required: true

        },
      
    },
    {
        collection: "users",
    }
);
module.exports = mongoose.model("users", user);