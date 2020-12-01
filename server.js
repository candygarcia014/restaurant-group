// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables, reserves, waitList = [];

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });

app.get("/api/tables", function(req, res) {
    return res.json(reserves);
  });

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });

app.get("/", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });

app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;
  
    console.log(newRes);
  
    reserves.push(newRes);
  
    res.json(newRes);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });