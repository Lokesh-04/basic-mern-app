import express from "express";
import mongoose from "mongoose";
import Data from "./models/Data.js"; //importing model

const app = express(); // creates a http server
const port = 3000;

mongoose.connect('mongodb+srv://kancharapulokeshkumar:nVCiHmGB8rXjbgEJ@cluster1.n0lqznp.mongodb.net/?retryWrites=true&w=majority'); // mongoDB connection string
// mongodb://localhost:27017/mern
app.use(express.json());

app.get("/api", (req, res)=>{
  res.json({
    h1Text: "Home page which is rendered from backend",
  });
});

app.get("/api/input", (req, res) => {
  res.json({
    h1Text: "Input page which is rendered from backend",
  });
});

app.post("/api/input", async(req, res) => {
  const count = await Data.countDocuments({}) + 1;
  const data = new Data({
    id: count,
    data: req.body.data,
  });
  
  await data.save();
});

app.get("/api/output", async(req, res) => {
  const data = await Data.find({});
  res.json(data)
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});