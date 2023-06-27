import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// for setting up env variables
dotenv.config();

// set up express app
const app = express();

// removes cors problem
app.use(cors());

// specifies payload size
app.use(express.json({ limig: "50mb" }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

app.listen(8080, () => console.log("Server has started on port 8080"));