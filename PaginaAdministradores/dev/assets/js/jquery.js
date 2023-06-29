$(document).ready(function(){
    $("#productoForm").validate({
    });

    $('#btnIngresar').click(function(e) {
        e.preventDefault(); //
        if ($('#productoForm').valid()) {
            alert('El formulario ha sido enviado exitosamente!');
            window.location.href = '';
        }
    });
});