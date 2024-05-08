// index.js

const express = require('express');
const { connectToMongoDB } = require('./database/mongoConnection');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal, servirá el archivo index.html de la carpeta public
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Conectar a MongoDB Atlas
connectToMongoDB()
  .then((client) => { // <- Agrega client como parámetro aquí
    // Ruta para listar estudiantes
    app.get('/api/estudiantes', async (req, res) => {
      try {
        // Obtener la colección de estudiantes desde la base de datos
        const db = client.db("nosqlBDD01");
        const collection = db.collection("estudiantes");

        // Obtener todos los estudiantes
        const estudiantes = await collection.find().toArray();

        // Enviar la lista de estudiantes como respuesta
        res.json(estudiantes);
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
        res.status(500).json({ error: "Error al obtener estudiantes" });
      }
    });

    // Iniciar el servidor
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB Atlas:", error);
  });
