# CoderHouse.ReactJs.ProyectoFinal

## Descripción

Proyecto Final del curso de ReactJs de Coderhouse. "La casa de las guitarras" es una aplicación de e-commerce desarrollada con React, Vite y Firebase, diseñada para los amantes de la música. Los usuarios pueden explorar fácilmente el catálogo, agregar productos al carrito y "realizar compras" gracias a la integración con autenticación y almacenamiento de datos en Firestore. Con una interfaz intuitiva y una experiencia optimizada, este e-commerce es el lugar ideal para encontrar el instrumento perfecto.

## Características principales

Listado de funcionalidades.

1. Autenticación de usuarios: Implementada con Firebase para un acceso seguro.
2. Visualización dinámica de productos: Datos obtenidos en tiempo real desde Firestore.
3. Gestión del carrito de compras: Manejo eficiente del carrito mediante hooks de React.
4. Variables de entorno: Configuración de parámetros sensibles mediante variables de entorno.
5. Persistencia de sesión: Almacenamiento del estado e información de inicio de sesión en Local Storage.

## Tecnologías utilizadas

- React: Construcción de la interfaz de usuario.
- Vite: Entorno de desarrollo rápido.
- Firebase: Autenticación y base de datos Firestore.
- CSS/Styled Components: Estilos y diseño atractivo.

## Instalación

Para clonar e instalar la aplicación:

~~~
# Clonar el repositorio
git clone https://github.com/RodolfoPeralta/CoderHouse.ReactJs.ProyectoFinal.git

# Entrar al directorio del proyecto
cd CoderHouse.ReactJs.ProyectoFinal

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
~~~


## Configuración de la base de datos

Es necesario crear un archivo .env en la raíz del proyecto y definir las siguientes variables:

~~~
VITE_apiKey= tu-key
VITE_authDomain= tu-key
VITE_projectId= tu-key
VITE_storageBucket= tu-key
VITE_messagingSenderId= tu-key
VITE_appId= tu-key
VITE_measurementId= tu-key
~~~

## Enlace al Deploy en Netlify

## Captura página de inicio

![Página de inicio "La casa de las guitarras"](/public/img/home.jpg) 

## Proximamente

- Control global del stock de productos utilizando el Hook useReducer.
- Seguimiento de la compra del usuario.
- Ampliación listado de productos.
