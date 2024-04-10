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

router.get("stores", isAdmin, async (req, res) => {
    // return {store_name, store_id, manager_name, manager_contact, sales, ordered}
    try {
        let stores = await storesModel.find();
        let response = []
        stores.forEach(store => {
            let sales = 0;
            let ordered = 0;
            store.inventory.forEach(med => {
                sales += med.qty_sold;
                ordered += med.qty_ordered;
            })
            response.push({
                store_name: store.store_name,
                store_id: store._id,
                manager_name: store.manager_name,
                manager_contact: store.manager_contact,
                sales: sales,
                ordered: ordered
            })
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
        let medicineSales = await salesModel.find({
            date: {
                $gte: req.begin_date,
                $lte: req.end_date
            }
        });
        let response = []
        medicines.forEach(med => {
            let sales = 0;
            medicineSales.forEach(sale => {
                sale.sale_details.forEach(saleDetail => {
                    if (saleDetail.medicine_id === med._id) {
                        sales += saleDetail.quantity;
                    }
                })
            })
            response.push({
                name: med.name,
                desc: med.desc,
                stock_quantity: med.stock_quantity,
                sales: sales
            })
        })
        res.send(response);
    } catch (error) {
        console.log(error);
        res.sendStatus(403);
    }
})

export default router;