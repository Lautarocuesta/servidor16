const mongoose = require("mongoose");

// Crear el Schema para el libro
const libroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "El título  es requerido"],
    },
    autor: {
        type: String,
        required: [true, "El autor del libro es requerido"],
    },
    genero: {
        type: String,
        required: [true, "El género del libro es requerido"],
    },
    cantpaginas: { 
        type: Number,
        required: [true, "La cantidad de páginas del libro es requerida"],    
    },
    isbn: { 
        type: Number,
        required: [true, "La cantidad de identifiacion es requerida del libro es requerida"],    
    },
    año: {
        type: Number,
        required: [true, "El año de publicación del libro es requerido"],
    },
});

const Libro = mongoose.model("Libro", libroSchema);

module.exports = Libro;