import express, { Router } from "express";
import Persons from "../models/personsModel.js";
import { createPerson, findById } from "../controllers/personsController.js";
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(500).send({ message: "hello world" });
});

router.post("/create", createPerson)
router.get("/:id", findById)
export default router;
