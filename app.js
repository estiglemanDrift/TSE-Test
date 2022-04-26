const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/main", (req, res) => {
  res.render("main.ejs");
});

app.get("/identify", (req, res) => {
  res.render("identifyUser");
});

app.get("/ESMarketo", (req, res) => {
  res.render("ESMarketo");
});

app.get("/gtmtest", (req, res) => {
  res.render("GTMDriftInstall");
});

app.get("/apiTestingES", (req, res) => {
  res.render("apiTestingES");
});


app.get("/apiTestingES", (req, res) => {
  res.render("apiTestingES");
});

app.get("/sandbox", (req, res) => {
  res.render("sandbox");
});

app.get("/fastlane", (req, res) => {
  res.render("fastlane");
});

app.get("/iframe", (req, res) => {
  res.render("drift-frame");
});

app.get("/ga", (req, res) => {
  res.render("ga");
});

app.get("/gatest", (req, res) => {
  res.render("ga_test");
});

app.get("/fastlanegtm", (req, res) => {
  res.render("fastlaneGtm");
});

app.get("/linkedin", (req, res) => {
  res.render("linkedInTrack");
});

app.get("/flMarketo", (req, res) => {
  res.render("fastlaneMarketo.ejs");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
