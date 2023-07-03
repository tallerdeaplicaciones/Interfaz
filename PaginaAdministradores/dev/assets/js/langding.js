// Lista de usuarios predefinidos
const usuarios = [
  { email: 'jefe@gmail.com', password: 'abc.123' },
  { email: 'vendedor@gmail.com', password: 'abc.123' },
  // Agrega más usuarios si es necesario
];


// Obtener referencia al botón de inicio de sesión
const loginButton = document.getElementById('login-button');

// Agregar controlador de eventos para el clic del botón de inicio de sesión
loginButton.addEventListener('click', function() {
  // Obtener los valores ingresados en los campos de email y contraseña
  const email = document.getElementById('emailRegistro').value;
  const password = document.getElementById('passwordRegistro').value;

  // Verificar si las credenciales coinciden con algún usuario de la lista
  const usuarioEncontrado = usuarios.find(function(usuario) {
    return usuario.email === email && usuario.password === password;
  });

  if (usuarioEncontrado) {
    // Inicio de sesión exitoso

    if (email === 'vendedor@gmail.com') {
      // Redirigir al usuario a ventas.html
      window.location.href = '../../../PaginaVendedores/ventas.html';
    } else if (email === 'jefe@gmail.com') {
      // Redirigir al usuario a informeDiario.html
      window.location.href = 'informeDiario.html';
    } else {
      // Otro tipo de usuario no redirigido específicamente
      alert('Inicio de sesión exitoso');
    }
  } else {
    // Credenciales inválidas
    alert('Email o contraseña incorrectos');
  }
});

