// app.js

// Función para gestionar el inicio de sesión
function login(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores del usuario y la contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar las credenciales (usuario: ventas, contraseña: exitosas)
    if (username === 'ventas' && password === 'exitosas') {
        // Guardar una bandera de sesión en sessionStorage
        sessionStorage.setItem('usuarioAutenticado', 'true');

        // Redirigir a la página de zona de vendedores
        window.location.href = './zona_vendedores.html';
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
    }
}

// Verificar la sesión al cargar la página de zona de vendedores
function verificarSesion() {
    // Verificar si el usuario está autenticado al cargar la página
    var usuarioAutenticado = sessionStorage.getItem('usuarioAutenticado');

    // Si no hay bandera de sesión o no está establecida como 'true', redirigir de nuevo al inicio de sesión
    if (!usuarioAutenticado || usuarioAutenticado !== 'true') {
        window.location.href = './vendedores.html'; // Redirigir al inicio de sesión
    }
}

// Verificar la sesión al cargar la página de zona de vendedores
document.addEventListener('DOMContentLoaded', verificarSesion);
