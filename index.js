const express = require("express");
const app = express();
const PORT = 4000;
app.get('/', (req, res) => {
    res.send("build docker image with jenkins by hakym yar beyg")
});
app.listen( PORT, () => console.log("Server is listening to port" + PORT ));
