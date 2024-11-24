import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbConnection = async () => {
  try {
await mongoose.Connect(process.env.ATLAS_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
    console.log("Database connected successfully");
    return mongoose.connection;
  } catch (error) {
    console.log("Error while connecting to data:", error);
  }
};
export default dbConnection;
