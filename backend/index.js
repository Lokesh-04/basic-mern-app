import express from "express";

const app = express(); // creates a http server
const port = 3000;

const DATA = [];

app.use(express.json());

app.get("/api/", (req, res) => {
  res.json({
    h1Text: "Home page which is rendered from backend",
  });
});

app.get("/api/input", (req, res) => {
  res.json({
    h1Text: "Input page which is rendered from backend",
  });
});

app.post("/api/input", (req, res) => {
  const data = req.body.data;

  const cnt = DATA.length + 1;

  DATA.push({
    id: cnt,
    value: data
  })
  res.json(DATA)
});

app.get("/api/output", (req, res) => {
  res.json(DATA)
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});