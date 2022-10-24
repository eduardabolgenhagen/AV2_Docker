const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const users = require('./users/users');

+app.use(express.json());
app.use('/users', users.router);
app.listen(port, () => console.log("Porta", port));

app.get("/", (req, res) => { res.send("Server rodando") });

