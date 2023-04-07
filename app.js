const express = require("express");
const app = express();
const workingHours = require("./workingHours");
app.set("view engine", "ejs");
app.use(
  "/public",
  express.static(__dirname + "/public", {
    setHeaders: function (res, path, stat) {
      res.set("Content-Type", "text/css");
    },
  })
);

app.get("/", (req, res, next) => {
  res.redirect("/Home");
});
app.get("/Home", workingHours, (req, res) => {
  res.render("home");
});

app.get("/ourServices", workingHours, (req, res) => {
  res.render("services");
});

app.get("/contactUS", workingHours, (req, res) => {
  res.render("contact");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
