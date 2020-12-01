// Dependencies
// =============================================================
let tables = []; 
let waitList = [
    {
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"   
    }
];
let reserves = [
    {
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    }
]
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/table", function(req, res) {
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
    let newRes = req.body;
  
    // console.log(typeof newRes);      
  
    reserves.push(newRes);

    // console.log(reserves);
    if(reserves.length <= 11){
        waitList.push(newRes);
    };
    
    res.json((reserves.length <= 11) ? true : false);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });