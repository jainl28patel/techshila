import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

import {
  userModel,
  medicineModel,
  orderModel,
  inventoryModel,
} from "../db/models.mjs";
import {
  compareHashedPassword,
  findUserByMail,
  findUserByPhone,
  getHash,
  isValidRole,
} from "./utils.mjs";

const getEmail = (req) => {
  let token = req.headers.cookie?.split("token=")[1];
  if (!token) {
    return;
  }

  return jwt.verify(token, process.env.JWT_SECRET).email;
};
const isValidUser = async (req, res, next) => {
  // get jwt from header
  let token = req.headers.cookie?.split("token=")[1];
  if (!token) {
    res.sendStatus(403);
    return;
  }

  let email = jwt.verify(token, process.env.JWT_SECRET).email;

  let user = await userModel.findOne({ email: email });

  if (user) {
    next();
  } else {
    res.send("invalid user");
    res.sendStatus(403);
  }
};

// user management
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
  let user = await userModel.findOne({ email: data.email });
  if (user) {
    if (compareHashedPassword(data.password, user.password)) {
      if (!req.headers.cookie?.split("token=")[1]) {
        // generate token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
        res.cookie("token", token, {
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
  let confirm_password = req.body.confirm_password;
  

  if (!name || !email || !contact || !password || !confirm_password ) {
    res.send("missing fields").status(400);
    return;
  }

  if (password !== confirm_password) {
    res.send("password and confirm password do not match").status(400);
    return;
  }

  if (typeof contact !== "number") {
    res.send("bad request").status(400);
    return;
  }

  let userEmail = await findUserByMail(email);
  let userPhone = await findUserByPhone(contact);

  if (userEmail) {
    res.send("Email already in use").status(400);
    return;
  }

  if (userPhone) {
    res.send("Phone number already in use").status(400);
    return;
  }

  let newEntry = new userModel({
    name: name,
    email: email,
    contact: contact,
    password: await getHash(password),
    order_history: [],
    location: {
      latitude: 0,
      longitude: 0
    }
  });

  try {
    newEntry.save();
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    res.status(200).send("successful")
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.get("/dashboard", isValidUser, async (req, res) => {
  res.send("dashboard").status(200);
});

router.post("/change-password", isValidUser, async (req, res) => {
  let password = req.body.password;
  let confirm_password = req.body.confirm_password;

  if (!password || !confirm_password) {
    res.send("missing fields").status(400);
    return;
  }

  if (password !== confirm_password) {
    res.send("password and confirm password do not match").status(400);
    return;
  }

  let hash = await getHash(password);

  let update = await userModel.findOneAndUpdate(
    { email: email },
    { $set: { password: hash } },
    { new: true }
  );

  if (update) {
    res.status(200).send("Successful");
  } else {
    res.status(500).send("Intenal Server Error");
  }
});

router.post("/delete-user", isValidUser, async (req, res) => {
  try {
    let email = getEmail(req);
    let deletd_user = await userModel.deleteOne({ email: email }) ;
  
    if(deletd_user){
      res.status(200).send("success")
    }else{
      res.status(400).send("unsuccessful")
    }
  } catch (error) {
    console.log(err);
    res.status(400).send(err);
  }
});

// getters

router.get("/search", async (req, res) => {
  let name = req.query.name;
  if(name){
    let data = await medicineModel.find({ $text: { $search: name } });
  }else{
    let data = await medicineModel.find();
  }

  if (data) {
    res.status(200).send(data);
  } else {
    res.status(400).send("Not Found");
  }
});

router.get("/order-history", isValidUser, async (req, res) => {
  let email = getEmail(req);

  let order_history = await userModel.findOne({ email: email }).order_history;

  if (order_history.length > 0) {
    let order_list = [];

    Array.from(order_history).map(async (order_id) => {
      let order = await orderModel.findById(order_id);
      order_list.push(order);
    });
    res.status(200).send(JSON.parse(JSON.stringify(order_list)));
  } else {
    res.status(400).send("Not Found");
  }
});

router.post("/update-location", isValidUser, async (req, res) => {
  let lat = req.body.latitude;
  let long = req.body.longitude;

  if (!lat || !long) {
    res.send("missing fields").status(400);
    return;
  }
  let email = getEmail(req);

  let update = await userModel.findOneAndUpdate(
    { email: email },
    { $set: { location: { latitude: lat, longitude: long } } },
    { new: true }
  );

  if (update) {
    res.status(200).send("Successful");
  } else {
    res.status(500).send("Intenal Server Error");
  }
});

router.post("/update-location", isValidUser, async (req, res) => {
  let lat = req.body.latitude;
  let long = req.body.longitude;

  if (!lat || !long) {
    res.send("missing fields").status(400);
    return;
  }
  let email = getEmail(req);

  let update = await userModel.findOneAndUpdate(
    { email: email },
    { $set: { location: { latitude: lat, longitude: long } } },
    { new: true }
  );

  if (update) {
    res.status(200).send("Successful");
  } else {
    res.status(500).send("Intenal Server Error");
  }
});

router.post("/place-order", isValidUser, async (req, res) => {
  try {
    let med_id = req.body.med_id;
    let quantity = req.body.quantity;

    if (!med_id || !quantity) {
      res.send("missing fields").status(400);
      return;
    }
    let email = getEmail(req);

    let status = ["pending", "completed", "cancelled"].at(
      Math.floor(Math.random() * 10) % 3
    );

    let medicine = await medicineModel.findById(med_id);

    let price = medicine.price;

    let cost = price * quantity;

    let order = new orderModel({
      status: status,
      total_amount: cost,
      medicines: [
        {
          id: med_id,
          quantity: quantity,
          price: cost,
        },
      ],
    });

    let update = await userModel.findOneAndUpdate(
      { email: email },
      { $push: { order_history: order._id } },
      { new: true }
    );

    if (update) {
      res.status(200).send("Successful");
    } else {
      res.status(500).send("Intenal Server Error");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
}
});

router.get("/store-details",isValidUser, async(req, res) =>{
    try {
        let stores = await inventoryModel.find()
        res.status(200).send(stores)
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

export default router;
