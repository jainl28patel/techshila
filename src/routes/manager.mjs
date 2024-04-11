import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

import { medicineModel, inventoryModel } from "../db/models.mjs";

const isManager = async (req, res, next) => {
    // get jwt from header
    let token = req.headers.cookie?.split("token=")[1];
    if(!token) {
        res.sendStatus(403);
        return;
    }
    
    let email = jwt.verify(token, process.env.JWT_SECRET).email;

    let user = await userModel.findOne({email: email});
    
    if(user.role == "manager") {
        next();
    } else {
        res.send("invalid user")
        res.sendStatus(403);
    }
}

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