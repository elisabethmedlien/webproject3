const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());

var navbar = require("./navbar");
var home = require("./home");
var programme = require("./programme");
var events = require("./events");
var partners = require("./partners");
var festivalreports = require("./festivalreports");
var general = require("./general");
var review = require("./review");
var anniversary = require("./anniversary");
var contactPersons = require("./contactPersons");
var event = require("./event");
var posts = require("./posts");
var newsArticle = require("./newsArticle");
var newsYearList = require("./newsYearList");
var scheduledLiveStream = require("./scheduledLiveStream");
var contactAddress = require("./contactAddress");
var venues = require("./venues");
var eventList = require("./eventList");
var eventYearList = require("./eventYearList");
var adminUsers = require("./adminUsers");
var livestream = require("./livestream");
var settings = require("./settings");
var adminLogin = require("./adminLogin");

app.get("/", (req, res) => {
  /*fix*/
  res.send("jille greiå");
});

app.use("/navbar", navbar);
app.use("/home", home);
app.use("/programme", programme);
app.use("/events", events);
app.use("/partners", partners);
app.use("/festivalreports", festivalreports);
app.use("/general", general);
app.use("/review", review);
app.use("/anniversary", anniversary);
app.use("/contactPersons", contactPersons);
app.use("/event", event);
app.use("/posts", posts);
app.use("/newsArticle", newsArticle);
app.use("/newsYearList", newsYearList);
app.use("/scheduledLiveStream", scheduledLiveStream);
app.use("/contactAddress", contactAddress);
app.use("/venues", venues);
app.use("/eventList", eventList);
app.use("/eventYearList", eventYearList);
app.use("/adminUsers", adminUsers);
app.use("/livestream", livestream);
app.use("/settings", settings);
app.use("/adminLogin", adminLogin);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
