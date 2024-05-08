# CRUD Cloud MongoDB - BDD01

Este proyecto es un ejemplo básico de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) utilizando MongoDB como base de datos en la nube y desplegando tanto el backend como el frontend en Netlify.

## Descripción

El objetivo de este proyecto es proporcionar a los estudiantes un ejemplo práctico de cómo crear una aplicación CRUD utilizando tecnologías modernas como MongoDB, Express.js y Netlify. La aplicación permite a los usuarios enviar sus nombres a través de un formulario, almacenarlos en una base de datos MongoDB en la nube y luego visualizar la lista de nombres guardados.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **.netlify/functions/**: Contiene las funciones serverless de Netlify.
- **database/**: Contiene el archivo de conexión a la base de datos MongoDB.
- **public/**: Contiene los archivos estáticos del frontend, como HTML, CSS y JavaScript.
- **index.js**: Archivo principal del servidor Express.
- **package.json**: Archivo de configuración de npm con las dependencias y scripts del proyecto.

## Configuración y Uso

1. **Instalación de Dependencias**:
```
npm install
```


2. **Configuración de MongoDB Atlas**:
- Crea una cuenta en MongoDB Atlas si aún no tienes una.
- Crea un nuevo clúster y configura tu base de datos.
- Obtén la URI de conexión proporcionada por MongoDB Atlas.

3. **Configuración de Variables de Entorno**:

Esta configuración no es necesaria 

- Crea un archivo `.env` en la raíz del proyecto.
- Agrega la URI de conexión de MongoDB Atlas al archivo `.env`:
  ```
  MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>/<basededatos>?retryWrites=true&w=majority
  ```

4. **Ejecución del Proyecto**:
```
npm start
```


5. **Acceso a la Aplicación**:
- Accede a la aplicación en tu navegador web en `http://localhost:3000`.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor abre un issue primero para discutir los cambios propuestos.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).