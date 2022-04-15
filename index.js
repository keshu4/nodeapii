var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res) => {
    res.send("Hello");
})

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

app.post("/bfhl",(req,res) => {
    var a = req.body.data;
    numbers = []
    alphabets = []
    c1 = 0;
    c2 = 0;
    for(let i = 0; i < a.length; i++){
        if(isLetter(a[i])){
            alphabets[c2] = a[i];
            c2++;
        }
        if(!isNaN(a[i])){
            numbers[c1] = a[i];
            c1++;
        }
    }
    const re = {
        "is_success": true,
        "user_id": "krishnadeep_badbadwal_04032001",
        "email": "krishnadeepbadbadwalcs19@acropolis.in",
        "roll_number": "0827CS191131",
        "numbers": numbers,
        "alphabets": alphabets
    }
    res.json(re);
})
app.listen(port, (req, res) => {
    console.log("listening at port 5000");
});
