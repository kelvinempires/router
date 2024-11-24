import express from "express";
import dbConnection from "./db/conn.js";
import personRoute from "./routes/personsRoute.js";

dbConnection();
const app = express();
const port = 7000;

app.use(express.json());
app.use("/persons", personRoute);

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
