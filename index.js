// index.js

const express = require('express');
const { connectToMongoDB } = require('./database/mongoConnection');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
