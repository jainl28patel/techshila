import { userModel } from "../db/models.mjs";
import bcrypt from "bcrypt";

export const isValidEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export const isValidCoordinates = (latitude, longitude) => {
  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return false;
  }

  if (latitude < -90 || latitude > 90) {
    return false;
  }

  if (longitude < -180 || longitude > 180) {
    return false;
  }
  return true;
};

export const findUserByMail = async (email) => {
  return await userModel.findOne({ email: email });
};

export const findUserByPhone = async (phone) => {
  return await userModel.findOne({ contact: phone });
};

export const isValidRole = (role) => {
  return ["customer", "manager", "admin"].includes(role);
};

export const getHash = async (password) => {
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

export const compareHashedPassword = async (password, hash) => {
  const validPassword = await bcrypt.compare(password, hash);
  return validPassword;
};
