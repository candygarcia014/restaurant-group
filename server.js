// Dependencies
// =============================================================
<<<<<<< HEAD
=======
let tables = []; 
let reserves = [
    {
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    },{
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    }
]
>>>>>>> serverTest
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
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

app.get("/api/tables", function(req, res) {
    return res.json(reserves.filter((x, i) => i <= 9
    ));
  });

app.get("/api/waitlist", function(req, res) {
    return res.json(reserves.filter((x,i) => i > 9));
  });


<<<<<<< HEAD
app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCharacter);
=======
app.post("/api/new", function(req, res) {
    let newRes = req.body;
>>>>>>> serverTest
  
    characters.push(newCharacter);
  
<<<<<<< HEAD
    res.json(newCharacter);
=======
    reserves.push(newRes);
    
    res.json((reserves.length <= 10) ? true : false);
>>>>>>> serverTest
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });