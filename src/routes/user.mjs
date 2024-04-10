import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

import { usersModel, storesModel, salesModel, medicinesModel } from "../db/models.mjs";
import { compareHashedPassword, findUserByMail, findUserByPhone, getHash, isValidRole } from "./utils.mjs";

const isValidUser = async (req, res, next) => {
  // get jwt from header
  let token = req.headers.cookie?.split("token=")[1];
  if (!token) {
    res.sendStatus(403);
    return;
  }

  let email = jwt.verify(token, process.env.JWT_SECRET).email;

  let user = await usersModel.findOne({ email: email });

  if (user.role == "customer") {
    next();
  } else {
    res.send("invalid user");
    res.sendStatus(403);
  }
};

router.post("/login", async (req, res) => {
    let data = req.body;
   
    if(!data.email || !data.password || !data.name || !isValidEmail(data.email)) {
        res.send("invalid data").status(403);
        return;
    }
    // check if user already exists
    let user = await usersModel.findOne({email: data.email});
    if(user) {
        if(compareHashedPassword(data.password, user.password)) {
            if(!req.headers.cookie?.split("token=")[1]) {
              // generate token
              const token = jwt.sign({email: user.email}, process.env.JWT_SECRET);
              res.cookie("token", token, {
                  httpOnly: true,
                  maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
              })
            }
            res.send({status: "success"});
        } else {
            res.sendStatus(403);
        }
    } else {
      res.sendStatus(403);
    }
});


router.post("/signup", async (req, res) =>{
    let name = req.body.name
    let email = req.body.email
    let phone_number = req.body.phone_number
    let password = req.body.password
    let confirm_password = req.body.confirm_password
    let role = req.body.role

    if(!name || !email || !phone_number || !password || !confirm_password || !role){
        res.send("missing fields").status(400);
        return;
    }
    
    if(password !== confirm_password){
        res.send("password and confirm password do not match").status(400);
        return;
    }
    
    if(!isValidRole(role) || (typeof phone_number !== "number")){
        res.send("bad request").status(400);
        return;
    }
    
    let userEmail = await findUserByMail(email)
    let userPhone = await findUserByPhone(phone_number)
    
    if(userEmail){
        res.send("Email already in use").status(400);
        return;
    }

    if(userPhone){
        res.send("Phone number already in use").status(400);
        return;
    }

    let newEntry = new usersModel({
        name: name,
        email: email,
        phone_number: phone_number,
        password: getHash(password),
        role: role,
    })
    
    try {
        newEntry.save();
        const token = jwt.sign({email: email}, process.env.JWT_SECRET);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        })
        res.redirect("/dashboard");
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    } 

})


router.get("/dashboard", async (req, res) =>{
    res.send("dashboard").status(200)
})
export default router;