const express = require("express");
const app = express();

app.use(express.json());

const router = require("./router/animals.router");
app.use("/", router);

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});
