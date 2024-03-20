import express from "express";
import mongoose from "mongoose";
import Data from "./models/Data.js"; //importing model
import cors from "cors";

const app = express(); // creates a http server
const port = 3000;

mongoose.connect('mongodb+srv://kancharapulokeshkumar:TiXyBcf2E5Sl3Wx9@cluster0.gejtkqv.mongodb.net/mern'); // mongoDB connection string
// mongodb://localhost:27017/mern
app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
  res.json({
    h1Text: "Home page which is rendered from backend",
  });
});

app.get("/input", (req, res) => {
  res.json({
    h1Text: "Input page which is rendered from backend",
  });
});

app.post("/input", async(req, res) => {
  const count = await Data.countDocuments({}) + 1;
  const data = new Data({
    id: count,
    data: req.body.data,
  });
  
  await data.save();
});

app.get("/output", async(req, res) => {
  const data = await Data.find({});
  res.json(data)
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
