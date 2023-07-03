$(document).ready(function () {
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
