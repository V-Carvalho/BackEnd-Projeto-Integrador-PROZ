const cors = require("cors");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const router = require("./router/animals.router");
app.use("/", router);

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000");
});
