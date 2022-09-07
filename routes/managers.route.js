const express = require('express')


const ManagerRoute = express.Router();
// user model
let manager = require("../models/man");
var ObjectId=require('mongoose').Types.ObjectId;
// Add manager
ManagerRoute.post("/", (req, res) => {
    var usr = new manager({
        name: req.body.name,
        email: req.body.email,
        password: req.body.email,
        id: req.body.id,
        img: req.body.img,
        city: req.body.city
    });
    usr.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("error add" + JSON.stringify(err, undefined, 2));
        }
    });
});
// //user login                      
ManagerRoute.get("/", async (req, res) => {
    manager.find((err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            console.log("err");
        }
    })
});
//delete
ManagerRoute.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        console.log("doesn't exist");
        return res.status(400).send("doesn't exist"+ObjectId.isValid(req.params.id));
    }

    manager.findByIdAndRemove(req.params.id,(err,doc)=>{

        if(!err){
            res.send(doc);
        }
        else{
                console.log(JSON.stringify(err,undefined,2));     
               }
    })
})
ManagerRoute.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        console.log("doesn't exist");
        return res.status(400).send("doesn't exist");
    }
    var man=new manager({
        name: req.body.name,
        email: req.body.email,
        password: req.body.email,
        id: req.body.id,
        img: req.body.img,
    });
    manager.findByIdAndUpdate(req.params.id,{$set:man},{new:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.send("error");
        }
    })
})

module.exports = ManagerRoute;