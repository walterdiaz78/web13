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


// function login(event) {
//     event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
//     // Obtener los valores del usuario y la contraseña
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
    
//     // Verificar las credenciales (usuario: ventas, contraseña: exitosas)
//     if (username === 'ventas' && password === 'exitosas') {
//       // Redirigir a la página de zona de vendedores
//       window.location.href = './zona_vendedores.html';
//     } else {
//       alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
//     }
//   }