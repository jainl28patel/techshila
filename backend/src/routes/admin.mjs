import express from "express";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
const router = express.Router();

import { userModel,medicineModel, managerModel, inventoryModel, adminModel } from "../db/models.mjs";
import {  isValidEmail, isValidCoordinates, getHash, compareHashedPassword } from "./utils.mjs";


const isAdmin = async (req, res, next) => {
    next();
    // get jwt from header
    // let token = req.headers.cookie?.split("token=")[1];
    // if(!token) {
    //     res.sendStatus(403);
    //     return;
    // }
    
    // let email = jwt.verify(token, process.env.JWT_SECRET).email;

    // let user = await adminModel.findOne({email: email});
    
    // if(!user) {
    //     res.sendStatus(403);
    //     return;
    // } else {
    //     next();
    // }
}

router.post("/login", async (req, res) => {
    let data = req.body;
    if (
      !data.email ||
      !data.password 
    ) {
      res.status(403).send("invalid data");
      return;
    }
    // check if user already exists
    let user = await adminModel.findOne({ email: data.email });
    if (user) {
      if (compareHashedPassword(data.password, user.password)) {
        if (!req.headers.cookie?.split("token=")[1]) {
          // generate token
          const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
          res.cookie("token", token, {
            sameSite: "Lax",
          httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          });
        }
        res.send({ status: "success" });
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  });

router.post("/signup", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let contact = req.body.contact;
    let password = req.body.password;
  
    if (!name || !email || !contact || !password ) {
      res.send("missing fields").status(400);
      return;
    }
  
    if (typeof contact !== "number") {
      res.send("bad request").status(400);
      return;
    }
  
    let userEmail = await adminModel.findOne({ email:email });
    let userPhone = await adminModel.findOne({ contact: contact });
  
    if (userEmail) {
      res.send("Email already in use").status(400);
      return;
    }
  
    if (userPhone) {
      res.send("Phone number already in use").status(400);
      return;
    }
  
    let newEntry = new adminModel({
      name: name,
      email: email,
      contact: contact,
      password: await getHash(password)
    });
  
    try {
      newEntry.save();
      const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
      res.cookie("token", token, {
        sameSite: "Lax",
          httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      });
      res.status(200).send("successful")
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  });
  
router.post("/create-new-store", isAdmin, async (req, res)=>{
    let manager_mail = req.body.manager_mail
    let name = req.body.name
    let city = req.body.city
    let state = req.body.state
    let location_lat = req.body.location_lat
    let location_long = req.body.location_long

    if(!name || !manager_mail || !city || !state || !location_lat || !location_long || !isValidEmail(manager_mail) || !isValidCoordinates(location_lat,location_long)){
        return res.send("bad request").status(400)
    }
    
    let manager = await managerModel.findOne({email: manager_mail});
    if(!manager) {
        return res.send("manager not found").status(404)
    }

    let newStore = new inventoryModel({
        name: name,
        location: {
            latitude: location_lat,
            longitude: location_long,
            city: city,
            state: state
        },
        manager_id: manager._id,
        medicines: [],
        sales: 0,
        ordered: 0
    });

    try {
        newStore.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
})

router.get("/stores", isAdmin, async (req, res) => {
    // return {store_name, store_id, manager_name, manager_contact, sales, ordered}
    try {
        let stores = await inventoryModel.find();
        let response = [];
        for (const store of stores) {
            let manager = await managerModel.find({ _id: new ObjectId(store.manager_id) });
            // Assuming manager is always found, but you might want to handle cases where it's not found
            response.push({
                store_name: store.name,
                store_id: store._id,
                manager_name: manager ? manager.name : 'Manager Not Found',
                manager_contact: manager ? manager.phone : 'N/A',
                sales: store.sales,
                ordered: store.ordered
            });
        }
        res.send(response);
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
})

router.get("/medicines", isAdmin, async (req, res) => {
    // if (!req.begin_date || !req.end_date) {
    //     return res.send("bad request").status(400)
    // }
    try {
        let medicines = await medicineModel.find();
        let response = [];
        medicines.forEach(med => {
            response.push({
                id: med._id,
                name: med.name,
                sales: med.qty_sold,
                ordered: med.qty_ordered
            })
        })
        res.send(response);
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
})

router.get("/dashboard", isAdmin, async (req, res) => {
    // return {no_of_stores, no_of_medicines, total_sales, total_ordered}
    try {
        let stores = await inventoryModel.find();
        let sales = 0;
        let ordered = 0;
        stores.forEach(store => {
            sales += store.sales;
            ordered += store.ordered;
        })
        res.send({
            no_of_stores: stores.length,
            total_sales: sales,
            total_ordered: ordered
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
})

export default router;