import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

import { usersModel, storesModel, salesModel, medicinesModel } from "../db/models.mjs";
import { findUserByMail, findUserByPhone, isValidEmail, isValidCoordinates } from "./utils.mjs";


const isAdmin = async (req, res, next) => {
    // get jwt from header
    let token = req.headers.cookie?.split("token=")[1];
    if(!token) {
        res.sendStatus(403);
        return;
    }
    
    let email = jwt.verify(token, process.env.JWT_SECRET).email;

    let user = await usersModel.findOne({email: email});
    
    if(user.role === "admin") {
        next();
    } else {
        res.send("invalid user")
        res.sendStatus(403);
    }
}


router.post("/create-new-store", isAdmin, async (req, res)=>{
    let manager_mail = req.body.manager_mail
    let location_name = req.body.location_name
    let location_lat = req.body.location_lat
    let location_long = req.body.location_long

    if(!manager_mail || !location_name || !location_lat || !location_long || !isValidEmail(manager_mail) || !isValidCoordinates(location_lat,location_long)){
        return res.send("bad request").status(400)
    }
    
    let manager = findUserByMail(manager_mail)
    if(manager.role !== "manager"){
        return res.send("mail not affiliated with any manager").status(400)
    }

    // new db entry
    let newEntry = new storesModel({
        manager_id: manager._id,
        inventory: [],
        location:{
            name: location_name,
            latitude: location_lat,
            longitude: location_long,
        }
    });

    try {
        newEntry.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
})

router.post("/add-medicine", isAdmin, async (req, res) => {
    let name = req.body.medicine_name
    let desc = req.body.medicine_name
    let stock_quantity = req.body.stock_quantity  
    
    if(!name || !desc || !stock_quantity || (typeof stock_quantity !== "number") ){
        return res.send("bad request").status(400)
    }
    
    // new db entry
    let newEntry = new medicinesModel({
        name: name,
        desc: desc,
        stock_quantity: stock_quantity
    });
    
    try {
        newEntry.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }  
})

export default router;