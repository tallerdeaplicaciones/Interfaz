$(document).ready(function () {
  // Lista de usuarios predefinidos
  const usuarios = [
    { email: 'jefe@gmail.com', password: 'abc.123' },
    { email: 'vendedor@gmail.com', password: 'abc.123' },
    // Agrega más usuarios si es necesario
  ];

  $('#loginModal').on('show.bs.modal', function () {
    // Restablecer el formulario
    $('#iniciarSesion')[0].reset();

    // Reiniciar la validación
    $('#iniciarSesion').validate().resetForm();
  });

  $("#login-button").click(function () {
    // Forzar la validación y mostrar los mensajes de error
    $("#iniciarSesion").validate().form();
    // Mostrar los mensajes de error personalizados
    $("#iniciarSesion").validate().showErrors();
  });

  $("#iniciarSesion").validate({
    rules: {
      emailRegistro: {
        required: true,
        email: true
      },
      passwordRegistro: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      emailRegistro: {
        required: "Por favor, ingresa tu correo electrónico",
        email: "Por favor, ingresa un correo electrónico válido"
      },
      passwordRegistro: {
        required: "Por favor, ingresa tu contraseña",
        minlength: "La contraseña debe tener al menos 6 caracteres"
      }
    },
    errorPlacement: function (error, element) {
      // Mostrar los mensajes de error debajo de los campos correspondientes
      error.insertAfter(element);
    },
    onfocusin: true, // Activar mensajes de error al hacer clic en los campos
    submitHandler: function (form) {
      // Obtener los valores ingresados en los campos de email y contraseña
      const email = $("#emailRegistro").val();
      const password = $("#passwordRegistro").val();

      // Verificar si las credenciales coinciden con algún usuario de la lista
      const usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.email === email && usuario.password === password;
      });

      if (usuarioEncontrado) {
        // Inicio de sesión exitoso

        if (email === 'vendedor@gmail.com') {
          // Redirigir al usuario a ventas.html
          window.location.href = '../../PaginaVendedores/ventas.html';
        } else if (email === 'jefe@gmail.com') {
          // Redirigir al usuario a informeDiario.html
          window.location.href = 'index.html';
        } else {
          // Otro tipo de usuario no redirigido específicamente
          alert('Inicio de sesión exitoso');
        }
      } else {
        // Mostrar los mensajes de error personalizados
        $("#iniciarSesion").validate().showErrors({
          "emailRegistro": "Email o contraseña incorrectos",
          "passwordRegistro": "Email o contraseña incorrectos"
        });
      }
    }
  });

  $('#login-button').click(function () {
    $('#iniciarSesion').submit();
  });
});
