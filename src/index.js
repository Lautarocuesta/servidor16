const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/user");
const port = process.env.port || 3000;
const app = express();
//routes
app.get("/", (req, res) => {
    res.send("welcome to my api");
  });
app.post('/api/users', (req, res) => {
    // Aquí puedes manejar la lógica de tu solicitud POST
    res.send('Solicitud POST recibida en /api/users');
});
  //middleware
app.use(express.json());
app.use(userRoutes);

//mongo db connection
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to mongodb atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));