// submitName.js

const { connectToMongoDB } = require('../database/mongoConnection');

exports.handler = async (event) => {
    const { name } = JSON.parse(event.body);

    try {
        // Conectar a MongoDB Atlas
        const client = await connectToMongoDB();

        // Seleccionar la base de datos y la colección
        const db = client.db("tu_basededatos");
        const collection = db.collection("estudiantes");

        // Insertar el nombre del estudiante en la colección
        const result = await collection.insertOne({ nombre: name });

        // Manejar el resultado de la inserción
        if (result.insertedCount === 1) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: `Nombre "${name}" guardado correctamente` }),
            };
        } else {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: `Error al guardar el nombre "${name}"` }),
            };
        }
    } catch (error) {
        console.error("Error al conectar a MongoDB Atlas:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error al conectar a MongoDB Atlas" }),
        };
    }
};
