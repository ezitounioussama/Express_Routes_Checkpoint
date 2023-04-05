const express = require("express");
const app = express();
const workingHours = require("./workingHours");

app.get("/", workingHours, (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.get("/services", workingHours, (req, res) => {
  res.send("<h1>Our Services</h1>");
});

app.get("/contact", workingHours, (req, res) => {
  res.send("<h1>Contact us</h1>");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
