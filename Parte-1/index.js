const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.listen(port, () => console.log("Porta", port));
console.log("Hello world")

app.get("/", (req, res) => { res.send("Server rodando") });

