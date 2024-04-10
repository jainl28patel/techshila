import mongoose from "mongoose";

var Schema = mongoose.Schema;

const orderMedicines = new Schema({
  id: String,
  quantity: Number,
});

const order = new Schema(
  {
    store_id: String,
    order_medicines: orderMedicines,
  },
  { timestamps: true }
);

const medicineSaleDetails = new Schema({
  medicine_id: String,
  quantity: Number,
  details: [
    {
      store_id: String,
      quantity: Number,
    },
  ],
});

// Collections

const medicines = new Schema(
  {
    name: String,
    desc: String,
    stock_quantity: Number,
  },
  {
    collection: "medicines",
  }
);

const orders = new Schema(
  {
    users: [
      {
        user_id: String,
        order: order,
      },
    ],
  },
  {
    collection: "orders",
  }
);

const users = new Schema(
  {
    name: String,
    email: String,
    phone_number: String,
    password: String,
    role: String,
  },
  {
    collection: "users",
  }
);

const sales = new Schema(
  {
    sale: [
      {
        date: String,
        sale_details: medicineSaleDetails,
      },
    ],
  },
  {
    collection: "sales",
  }
);

const stores = new Schema(
  {
    manager_id: String,
    inventory: [
      {
        med_id: String,
        quantity: Number,
      },
    ],
    location: {
      name: String,
      latitude: Number,
      longitude: Number,
    },
  },
  {
    collection: "stores",
  }
);

export const usersModel = mongoose.model("usersData", users);
export const medicinesModel = mongoose.model("medicinesData", medicines);
export const ordersModel = mongoose.model("ordersData", orders);
export const storesModel = mongoose.model("storesData", stores);
export const salesModel = mongoose.model("salesData", sales);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));
