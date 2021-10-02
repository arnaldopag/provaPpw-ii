const express = require("express");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

app.use(cors());
app.use("/api/", router);
app.listen(port, function () {
    console.log(`Servidor Rodando na porta ${port}`);
});
