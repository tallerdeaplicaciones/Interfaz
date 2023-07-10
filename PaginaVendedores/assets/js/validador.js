$(document).ready(function(){
    $('#myModal').on('show.bs.modal', function () {
        // Restablecer el formulario
        $('#formularioRegistroCliente')[0].reset();

        // Reiniciar la validación
        $('#formularioRegistroCliente').validate().resetForm();
    });

    $("#btnGuardar").click(function () {
        // Forzar la validación y mostrar los mensajes de error
        $("#formularioRegistroCliente").validate().form();
    });
    $("#formularioRegistroCliente").validate({
        rules:{
            razonSocial:{
                required: true
            },
            rut:{
                required: true,
                maxlength: 12,
            }, 
            giro:{
                required: true,
            },
            direccion:{
                required: true,
                maxlength: 40
            }
        },
        messages:{
            razonSocial:{
                required: "Debe ingresar su Razón Social",
            },
            rut:{
                required: "Debe ingresar su Rut",
                maxlength: "El rut debe tener máximo 12 caracteres"
            },
            giro: {
                required: "Debe ingresar su giro"
            },
            direccion:{
                required: "Debe ingresar una dirección",
                maxlength: "La dirección debe tener máximo 40 caracteres"
            } 
        }
    });

    $("#registroCliente").on("click", ".btn-primary", function(e) {
        if (!$("#formularioRegistroCliente").valid()) {
            e.preventDefault(); // Evita que se ejecute la acción del botón
        }
    });
});
