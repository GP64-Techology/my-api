const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log(req, res);
    res.json({ value: "11111111" });
});

app.post("/", (req, res) => {
    console.log(req, res);
        res.json({ value: "11110000"});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
