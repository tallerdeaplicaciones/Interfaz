$(document).ready(function () {
    $('#myModal').on('show.bs.modal', function () {
        // Restablecer el formulario
        $('#productForm')[0].reset();

        // Reiniciar la validación
        $('#productForm').validate().resetForm();
    });

    $("#btnIngresar").click(function () {
        // Forzar la validación y mostrar los mensajes de error
        $("#productForm").validate().form();
    });
    $("#productForm").validate({
        rules: {
            codigoProducto: {
                required: true,
                minlength: 3,
                number: true
            },
            nombreProducto: {
                required: true,
                minlength: 3
            },
            descripcion: {
                required: true,
                minlength: 3
            },
            categoria: {
                required: true,
                minlength: 3
            },
            precio: {
                required: true,
                number: true
            },
            inventario: {
                required: true,
                number: true
            }
        },
        messages: {
            codigoProducto: {
                required: "Debe ingresar un Código de Producto",
                minlength: "El código debe tener mínimo 3 caracteres",
                number: "El código debe ser numérico"
            },
            nombreProducto: {
                required: "Debe ingresar un nombre para el producto",
                minlength: "El nombre debe tener mínimo 3 caracteres"
            },
            descripcion: {
                required: "Debe ingresar una descripción",
                minlength: "La descripción debe tener mínimo 3 caracteres"
            },
            categoria: {
                required: "Debe ingresar una categoría",
                minlength: "La categoría debe tener mínimo 3 caracteres"
            },
            precio: {
                required: "Debe ingresar un precio",
                number: "El precio debe ser numérico"
            },
            inventario: {
                required: "Debe ingresar la cantidad en inventario",
                number: "La cantidad en inventario debe ser numérica"
            }
        },
        onfocusout: function (element) {
            $(element).valid();
        }
    });
});
$(document).ready(function () {
    $('#myButton').click(function () {
        $(this).toggleClass('changed');
        if ($(this).hasClass('changed')) {
            $(this).text('Cierre de caja');
        } else {
            $(this).text('Apertura de caja');
        }
    });
});


$(document).ready(function () {
    $('#registerModal').on('show.bs.modal', function () {
        // Restablecer el formulario
        $('#register-form')[0].reset();

        // Reiniciar la validación
        $('#register-form').validate().resetForm();
    });
    $("#btnRegistrar").click(function () {
        // Forzar la validación y mostrar los mensajes de error
        $("#register-form").validate().form();
    });
    $("#register-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            userType: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Por favor, ingresa tu nombre"
            },
            email: {
                required: "Por favor, ingresa tu correo electrónico",
                email: "Por favor, ingresa un correo electrónico válido"
            },
            password: {
                required: "Por favor, ingresa tu contraseña",
                minlength: "La contraseña debe tener al menos 6 caracteres"
            },
            userType: {
                required: "Por favor, selecciona un tipo de usuario"
            }
        },
        onfocusout: function (element) {
            $(element).valid();
        }
    });
});



