const express = require("express");
const app = express();
const workingHours = require("./workingHours");
app.set("view engine", "ejs");
app.get("/", workingHours, (req, res) => {
  res.render("home");
});

app.get("/services", workingHours, (req, res) => {
  res.render("services");
});

app.get("/contact", workingHours, (req, res) => {
  res.render("contact");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
