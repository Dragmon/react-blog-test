# Prueba técnica ReactJS Blog

## Base de datos

1. Se requiere versión de NodeJS 20 o superior para este proyecto. (Se recomienda utilizar un gestor de versiones de node como nvm)
2. Descargue el siguiente repositorio desde la terminal 'git@github.com:Dragmon/prisma-technical-test.git'
3. Siga los pasos que se indican en el README, esto le permitirá tener una API de prueba en su entorno local para probar este proyecto, una vez que termine con este paso puede continuar.

## Proyecto

1. Instale todas las dependencias necesarias con npm install
2. Crear el archivo .env siguiendo como ejemplo el archivo .env.example
3. Asignando la ruta de la api que utilizara para el proyecto en el parametro VITE_REACT_APP_API_URL
4. Parea correr el proyectó de manera local ejecuté el siguiente comando:

```
npm run dev
```

El proyecto se ejecutará en la siguiente url http://localhost:5173

## Funcionalidades implementadas del requerimiento

- Guardar una nueva entra en base de datos con los siguientes campos:

  - Título
  - Autor
  - Fecha de publicación
  - Contenido

- Listado de entradas
- Búsqueda filtrando por título, autor o contenido.
- API rest con los métodos de consulta y guardar
