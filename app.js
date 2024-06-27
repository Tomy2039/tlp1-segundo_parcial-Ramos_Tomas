const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const data = require("./db")

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json);

//configuracion
app.set("port", process.env.PORT || 3000);

//servidor
app.listen(app.get("port"), () => {
    console.log(`el servidor esta corriendo en el puerto ${app.get("port")}`);
})

//rutas
app.get("/books/", (req, res) =>{
    res.json(data);
})
