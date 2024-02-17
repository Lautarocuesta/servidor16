const express = require("express");
const userSchema = require("../model/es.js");
const router = express.Router();

// create user
router.post("/insertar", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/listar", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/obtener/:isbn", (req, res) => {
  const { isbn } = req.params;
  userSchema
    .find({isbn: isbn})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/eliminar/:isbn", (req, res) => {
  const { isbn } = req.params;
  userSchema
    .deleteOne({isbn : isbn})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/modificar/:isbn", (req, res) => {
  const { isbn } = req.params;
  const { titulo, autor, genero, cantpaginas, año} = req.body;
  userSchema
    .updateOne({ isbn: isbn }, { $set: { titulo, autor, genero, cantpaginas,año}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;