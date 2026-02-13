const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ value: "11111111" });
    console.log(req, res);
});

app.post("/", (req, res) => {
    res.json({ value: "11110000"});
    console.log(req, res);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
