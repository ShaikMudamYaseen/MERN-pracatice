const express = require("express");
const app = express();
const auth = require("./routes/auth");

app.use(express.json());

app.use("/auth", auth);

app.get("/", (req, res) => {
    res.send("Home Page");
})
app.listen(1234);