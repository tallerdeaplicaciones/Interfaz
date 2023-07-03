$(document).ready(function() {
    $("#login-button").click(function() {
      var email = $("#emailRegistro").val();
      var password = $("#passwordRegistro").val();

      // Aquí debes implementar la lógica para verificar las credenciales del usuario
      // Puedes hacer una petición AJAX al servidor o utilizar cualquier otro método de autenticación

      // Ejemplo de lógica de autenticación básica
      if (email === "vendedor@example.com" && password === "vendedor123") {
        window.location.href = "vendedor.html";
      } else if (email === "admin@example.com" && password === "admin123") {
        window.location.href = "index.html";
      } else {
        // Las credenciales no coinciden, muestra un mensaje de error o realiza alguna acción adicional
        alert("Credenciales inválidas. Inténtalo de nuevo.");
      }
    });

    $("#register-button").click(function() {
      var userType = $("#userType").val();

      // Aquí debes implementar la lógica para guardar los datos del usuario en el servidor
      // Puedes hacer una petición AJAX al servidor para registrar al usuario

      // Después de registrar al usuario, redirige según su tipo
      if (userType === "vendedor") {
        window.location.href = "vendedor.html";
      } else if (userType === "administrador") {
        window.location.href = "index.html";
      } else {
        // Tipo de usuario inválido, muestra un mensaje de error o realiza alguna acción adicional
        alert("Tipo de usuario inválido. Por favor, selecciona un tipo de usuario válido.");
      }
    });
  });