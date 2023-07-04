$(document).ready(function(){
    $("#productForm").validate({
    });

    $('#btnIngresar').click(function(e) {
        e.preventDefault(); //
        if ($('#productForm').valid()) {
            alert('El formulario ha sido enviado exitosamente!');
            window.location.href = '';
        }
    });
});