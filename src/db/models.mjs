import mongoose from "mongoose";

var Schema = mongoose.Schema;

const admin = new Schema(
  {
    name: String,
    email: String,
    contact: String,
    password: String,
  },
  {
    collection: "admins",
  }
);

const manager = new Schema(
  {
    name: String,
    email: String,
    contact: String,
    password: String,
    store_id: String,
  },
  {
    collection: "managers",
  }
);

const user = new Schema(
  {
    name: String,
    email: String,
    contact: String,
    password: String,
    order_history: [order]
  },
  {
    collection: "users",
  }
);

const order = new Schema(
  {
    status: "pending" | "completed" | "cancelled",
    total_amount: Number,
    medicines: [
      {
        id: String,
        quantity: Number,
        price: Number,
      }
    ]
  },
  {
    collection: "orders",
  }
)

const inventory = new Schema(
  {
    name: String,
    location: {
      latitude: Number,
      longitude: Number,
      city: String,
      state: String,
    },
    manager_id: String,
    medicines: [medicine],
    sales: Number,
    ordered: Number,
  },
  {
    collection: "inventory",
  }
)

const medicine = new Schema(
  {
    name: String,
    desc: String,
    expiry_date: Date,
    qty_available: Number,
    qty_ordered: Number,
    price: Number,
    batch_id: String,
  },
  {
    collection: "medicines",
  }
)

const batch = new Schema(
  {
    batch_id: String,
    expiry_date: Date,
    medicines: [medicine],
  },
  {
    collection: "batches",
  }
)

export const adminModel = mongoose.model("admins", admin);
export const managerModel = mongoose.model("managers", manager);
export const userModel = mongoose.model("users", user);
export const orderModel = mongoose.model("orders", order);
export const inventoryModel = mongoose.model("inventory", inventory);
export const medicineModel = mongoose.model("medicines", medicine);
export const batchModel = mongoose.model("batches", batch);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));