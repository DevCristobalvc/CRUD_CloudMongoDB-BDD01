// testSubmitName.js

// testSubmitName.js

const fetch = require('node-fetch');

fetch('http://localhost:9000/submitName', {
    method: 'POST',
    body: JSON.stringify({ name: 'John' }),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));



/*
const submitName = require('../.netlify/functions/submitName');

const event = {
    body: JSON.stringify({ name: "John" }) // Simula el cuerpo de la solicitud HTTP con un nombre
};

// Simula la ejecución de la función lambda con el evento definido
submitName.handler(event)
    .then((response) => {
        console.log(response); // Muestra la respuesta de la función lambda en la consola
    })
    .catch((error) => {
        console.error(error); // Muestra cualquier error en la consola
    });
*/