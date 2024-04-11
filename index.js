import "./loadEnv.mjs"
import express from "express";
import cors from "cors";
import "./loadEnv.mjs";
import "express-async-errors";
import admin from "./src/routes/admin.mjs";
import manager from "./src/routes/manager.mjs";
import user from "./src/routes/user.mjs";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/admin", admin);
app.use("/manager", manager);
app.use("/user", user);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});