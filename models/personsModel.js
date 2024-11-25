import mongoose from "mongoose";

const personsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  favoriteFoods: {
    type: [String],
    required: true,
    trim: true,
  },
});

const Persons = mongoose.model("Persons", personsSchema);
export default Persons;
