import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

import { medicineModel, inventoryModel, managerModel } from "../db/models.mjs";
import {  isValidEmail, isValidCoordinates, getHash, compareHashedPassword } from "./utils.mjs";


const isManager = async (req, res, next) => {
    // get jwt from header
    let token = req.headers.cookie?.split("token=")[1];
    if(!token) {
        res.sendStatus(403);
        return;
    }
    
    let email = jwt.verify(token, process.env.JWT_SECRET).email;

    let user = await managerModel.findOne({email: email});
    
    if(!user) {
        res.sendStatus(403);
        return;
    }

    next();
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
    let user = await managerModel.findOne({ email: data.email });
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
    let store_id = req.body.store_id;
  
    if (!name || !email || !contact || !password ) {
      res.send("missing fields").status(400);
      return;
    }
  
    if (typeof contact !== "number") {
      res.send("bad request").status(400);
      return;
    }
  
    let userEmail = await managerModel.findOne({ email:email });
    let userPhone = await managerModel.findOne({ contact: contact });
  
    if (userEmail) {
      res.send("Email already in use").status(400);
      return;
    }
  
    if (userPhone) {
      res.send("Phone number already in use").status(400);
      return;
    }
  
    let newEntry = new managerModel({
      name: name,
      email: email,
      contact: contact,
      password: await getHash(password),
      store_id: ""
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

router.get("/medicines", isManager, async (req, res)=>{
    if(!req.user.id) {
        return res.sendStatus(403)
    }

    try {
        let inventory = await inventoryModel.findOne({manager_id: req.user._id});
        let response = [];
        inventory.medicines.forEach(med => async () => {
            let medicine = await medicinesModel.findOne({_id: med.medicine});
            response.push({
                id: medicine._id,
                name: medicine.name,
                sales: med.qty_sold,
                ordered: med.qty_ordered,
                available: med.qty_available,
            });
        });
        res.send(response);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.get("/inventory", isManager, async (req, res)=>{
    if(!req.user.id) {
        return res.sendStatus(403)
    }

    try {
        let inventory = await inventoryModel.findOne({manager_id: req.user._id});
        let response = [];
        inventory.medicines.forEach(med => async () => {
            let medicine = await medicinesModel.findOne({_id: med.medicine});
            response.push({
                id: medicine._id,
                name: medicine.name,
                sales: med.qty_sold,
                ordered: med.qty_ordered,
                available: med.qty_available,
                expiry_date: medicine.expiry_date,
                quantity: med.qty_available,
                batch_id: med.batch_id,
            });
        });
        res.send(response);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

router.post("/update", isManager, async (req, res)=>{
    if(!req.user.id) {
        return res.sendStatus(403)
    }
    let {medicine_name, quantity, batch_id, expiry_date, price} = req.body;
    try {
        let medicine = await medicinesModel.findOne({name: medicine_name});
        let inventory = await inventoryModel.findOne({manager_id: req.user._id});
        let med = inventory.medicines.find(med => med.medicine == medicine._id);
        if(!medicine) {
            // create new medicine
            let newMed = new medicinesModel({
                name: medicine_name,
                expiry_date: expiry_date,
                price: price,
                qty_available: quantity,
                qty_sold: 0,
                qty_ordered: 0,
            });
            await newMed.save();
            inventory.medicines.push({
                medicine: newMed._id,
                qty_available: quantity,
                qty_ordered: 0,
                qty_sold: 0,
                batch_id: batch_id,
            });
            inventory.save();
            res.sendStatus(200);
        } else if (!med) {
            // add medicine to inventory
            inventory.medicines.push({
                medicine: medicine._id,
                qty_available: quantity,
                qty_ordered: 0,
                qty_sold: 0,
                batch_id: batch_id,
            });
            inventory.save();

            // increment medicine quantity
            medicine.qty_available += quantity;
            medicine.save();
            res.sendStatus(200);
        } else {
            // update medicine quantity
            med.qty_available += quantity;
            med.save();

            // increment medicine quantity
            medicine.qty_available += quantity;
            medicine.save();
            res.sendStatus(200);
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router;