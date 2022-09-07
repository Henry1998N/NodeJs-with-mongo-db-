const mongoose = require("mongoose");
let Manager = new mongoose.Schema(
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
            type: String,
           // required: true

        },
        img: {
            type: String ,
            //required: true

        },
      
    },
    {
        collection: "Managers",
    }
);
module.exports = mongoose.model("Managers", Manager);