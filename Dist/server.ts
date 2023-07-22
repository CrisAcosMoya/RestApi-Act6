"use strict";


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
// Configurar la conexión a la base de datos MongoDB
const uri = 'mongodb://localhost:27017/myapp'; // Cambia esto si tu base de datos está en otro servidor
const client = new mongodb_1.MongoClient(uri);
// Conectar a la base de datos MongoDB
client.connect()
    .then(() => {
    console.log('Conexión exitosa a la base de datos MongoDB');
    // Puedes realizar operaciones con la base de datos aquí
})
    .catch((err) => {
    console.error('Error al conectar a la base de datos MongoDB:', err);
});
// Configurar rutas y lógica de la aplicación Express
// Iniciar el servidor Express
app.listen(3000, () => {
    console.log('Servidor Express iniciado en el puerto 3000');
});
