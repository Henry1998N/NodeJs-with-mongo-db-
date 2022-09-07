const express = require('express')


const userRoute = express.Router();
// user model
let user = require("../models/user");

// Add user
userRoute.post("/", (req, res) => {
 var usr=new user({
  name:req.body.name,
  email:req.body.email,
  password:req.body.email,
  id:req.body.id,
  img:req.body.img,
  city:req.body.cityx
 });
 usr.save((err,doc)=>{
  if(!err){
    res.send(doc);
  }else{
    console.log("error add"+JSON.stringify(err,undefined,2));
  }
 });
});

// //update user
// userRoute.put("/updateProfile/:Email",async  (req, res) => {
//   user.updateOne({ Email: req.params.Email }, { $set: req.body }, (error, data) => {
//     res.json(data);
//     res.send("user updated");
//   }
//   );
 
// });
// //delete user             
// userRoute.delete("/deleteUser/:Email", async (req, res) => {
//   let usr = await user.findOne({ Email: req.params.Email });
//   if (usr == null || usr == undefined) flag = 1;
//     user.findOneAndRemove({ Email: req.params.Email }, (error, data) => {
//     res.send("removed");
//     });
  
 
// });
// //user login                      
// userRoute.get("/login/:Email", async (req, res) => {
//   let uer = await user.findOne({ Email: req.params.Email });
//   if (uer === undefined || uer === null) {
//     res.status(401).send("Invalid username");
//   }
//   else {
//     res.send("welcome");
//   }

// });
module.exports = userRoute;