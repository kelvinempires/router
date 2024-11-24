import Persons from "../models/personsModel.js";

export const createPerson = async (req, res) => {
  try {
    const { username } = req.body;
    const existingUser = await Persons.findOne({ username });
    if (existingUser) {
      return res.status(400).send("user already exists");
    }
    const person = new Persons(req.body);
    await person.save();
    res.status(201).send("User created");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


//finding a particular user using it'S Id
export const findById = async (req, res) => {
  try {
    const user = await Persons.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.massage });
  }
};
