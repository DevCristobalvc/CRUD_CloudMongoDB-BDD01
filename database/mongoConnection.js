const { MongoClient, ServerApiVersion } = require('mongodb');

// URI de conexión proporcionada por MongoDB Atlas
const uri = "mongodb+srv://DevCristobalvc:Atlas+0326@cluster0.tqp9n9p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Crear un cliente MongoClient con la versión de API establecida
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    // Conectar el cliente al servidor MongoDB Atlas
    await client.connect();

    // Enviar un ping para confirmar una conexión exitosa
    await client.db("admin").command({ ping: 1 });
        console.log("¡Conexión exitosa a MongoDB Atlas!");
  } catch (error) {
        console.error("Error al conectar a MongoDB Atlas:", error);
  }
}

// Llamar a la función para conectar a MongoDB
connectToMongoDB();