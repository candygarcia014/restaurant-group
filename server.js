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
app.use(express.static('public'));

let reserves= [
    {
        customerEmail: "1",
        customerID: "1",
        customerName: "1",
        phoneNumber: "1"
    }];

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
    return res.json(reserves.filter((x, i) => i <= 9
    ));
  });

app.get("/api/waitlist", function(req, res) {
    return res.json(reserves.filter((x,i) => i > 9));
  });


app.post("/api/new", function(req, res) {
    let newRes = req.body;
  
    characters.push(newCharacter);
  
    reserves.push(newRes);
    
    res.json((reserves.length <= 10) ? true : false);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });