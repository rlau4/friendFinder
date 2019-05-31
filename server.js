var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var friends = [
    {
        name: "Peter",
        photo: ""
    }
]
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"))
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"))
});

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    newfriend.routeName= newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);
    friends.push(newfriend);
    res.json(newfriend);
});