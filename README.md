# Tienda Online: Pasteles
Aplicación web desarrollada con **React**, **Vite** y **Firebase**, que implementa autenticación de usuarios, control de permisos, rutas protegidas y un panel de administración para la gestión de productos y cupones de descuento.

## Demo
La aplicación se encuentra publicada en Netlify y puede probarse en el siguiente enlace:

**Demo**: https://pasteles-react.netlify.app/

## Repositorio
Código fuente del proyecto:

https://github.com/silvina-riera/Pasteles.git

## Descripción
Este proyecto consiste en una aplicación web para una tienda online de pastelería, desarrollada con **React** y **Vite**.

Los usuarios pueden registrarse, iniciar sesión, navegar por el catálogo de productos, consultar el detalle de cada uno, agregarlos al carrito de compras y aplicar cupones de descuento.

La aplicación utiliza **Firebase Authentication** para la autenticación de usuarios y **Firebase Firestore** para almacenar la información de productos y cupones.

Además, cuenta con un sistema de permisos basado en roles y rutas protegidas para restringir el acceso a las funcionalidades de administración.

## Tecnologías utilizadas
- React
- Vite
- JavaScript (ES6+)
- CSS Modules
- React Router DOM
- React Context API
- Firebase Authentication
- Firebase Firestore
- Node.js
- npm

## Requisitos previos
Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js (versión 18 o superior recomendada)
- npm

Verificar la instalación ejecutando:

node -v<br>
npm -v

## Instalación
1. Clonar el repositorio:
   
git clone https://github.com/silvina-riera/Pasteles.git

2. Ingresar a la carpeta del proyecto:
   
cd Pasteles

3. Instalar las dependencias:
   
npm install

## Configuración de Firebase
El proyecto utiliza **Firebase Authentication** y **Firebase Firestore**.

Crear un archivo .env en la raíz del proyecto con las credenciales correspondientes:

VITE_API_KEY=AIzaSyDtiszZCKVYK6FJFGzJDeo5NFUitofqM8U<br>
VITE_AUTH_DOMAIN=pasteles-react.firebaseapp.com<br>
VITE_PROJECT_ID=pasteles-react<br>
VITE_STORAGE_BUCKET=pasteles-react.firebasestorage.app<br>
VITE_MESSAGING_SENDER_ID=494660916959<br>
VITE_APP_ID=1:494660916959:web:b59a0312d2c5092994bb6a

## Ejecutar el proyecto
Iniciar el servidor de desarrollo:

npm run dev

Luego abrir el navegador en:

http://localhost:5173

## Compilar para producción
npm run build

Los archivos optimizados se generarán en la carpeta:

dist/

## Vista previa de producción
npm run preview

## Funcionalidades principales
### Usuarios
- Registro de nuevos usuarios mediante Firebase Authentication.
- Inicio y cierre de sesión.
- Visualización del catálogo de productos.
- Navegación por categorías.
- Consulta del detalle de cada producto.
- Agregado de productos al carrito de compras.
- Modificación de cantidades respetando el stock disponible.
- Eliminación de productos del carrito.
- Aplicación de cupones de descuento al total de la compra.
### Seguridad
- Autenticación de usuarios mediante Firebase Authentication.
- Gestión de permisos según el rol del usuario.
- Protección de rutas privadas mediante React Router.
- Acceso exclusivo al panel de administración para usuarios autorizados.
### Panel de administración
- Alta de productos.
- Modificación de productos existentes.
- Eliminación de productos.
- Creación de cupones de descuento.
- Eliminación de cupones de descuento.
- Persistencia de la información mediante Firebase Firestore.

## Estructura del proyecto
src/<br>
│<br>
├── components/<br>
├── context/<br>
├── firebase/<br>
├── App.jsx<br>
└── main.jsx

## Scripts disponibles
npm install: Instala las dependencias del proyecto.<br>
npm run dev: Inicia el servidor de desarrollo.<br>
npm run build: Genera la versión optimizada para producción.<br>
npm run preview: Ejecuta una vista previa de la aplicación compilada.

---
Proyecto desarrollado como práctica de React para Talento Tech, Ciudad de Buenos Aires - Argentina.
