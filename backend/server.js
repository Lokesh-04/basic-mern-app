import express from "express";
import mongoose from "mongoose";
import Data from "./models/dataModel.js"; //importing model
import cors from "cors";

const app = express(); // creates a http server
const port = 3000;

mongoose.connect(process.env.MONGO_URI); // mongoDB connection string
// mongodb://localhost:27017/mern
app.use(cors(
  // {origin : "https://test-app-frontend-delta.vercel.app",
  //   methods : ["GET","POST","PUT","DELETE"],
  //   credentials : true}
    ));
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

app.get("/output", async (req, res) => {
  try {
     const data = await Data.find({});
     res.json(data);
  } catch (error) {
     console.error("Error fetching data:", error);
     res.status(500).json({ error: "An error occurred while fetching data." });
  }
 });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
