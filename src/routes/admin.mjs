import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

import { usersModel, storesModel, salesModel, medicinesModel, ordersModel, managerModel, inventoryModel } from "../db/models.mjs";
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

router.get("stores", isAdmin, async (req, res) => {
    // return {store_name, store_id, manager_name, manager_contact, sales, ordered}
    try {
        let stores = await inventoryModel.find();
        let response = [];
        stores.forEach(store => async () => {
            let manager = await managerModel.findById(store.manager_id);
            response.push({
                store_name: store.name,
                store_id: store._id,
                manager_name: manager.name,
                manager_contact: manager.phone,
                sales: store.sales,
                ordered: store.ordered
            });
        })
        res.send(response);
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
})

router.get("/medicines", isAdmin, async (req, res) => {
    if (!req.begin_date || !req.end_date) {
        return res.send("bad request").status(400)
    }
    try {
        let medicines = await medicinesModel.find();
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