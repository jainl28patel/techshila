import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

import { usersModel, storesModel, salesModel, medicinesModel } from "../db/models.mjs";

const isManager = async (req, res, next) => {
    // get jwt from header
    let token = req.headers.cookie?.split("token=")[1];
    if(!token) {
        res.sendStatus(403);
        return;
    }
    
    let email = jwt.verify(token, process.env.JWT_SECRET).email;

    let user = await usersModel.findOne({email: email});
    
    if(user.role == "manager") {
        next();
    } else {
        res.send("invalid user")
        res.sendStatus(403);
    }
}

export default router;