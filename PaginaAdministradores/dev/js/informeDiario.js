function sel() {
    var filtroSelect = document.getElementById('documento').value;
    var filas = document.querySelectorAll('#tabla-ventas tbody tr');

    if (filtroSelect === '') {
        mostrarFilas(filas);
    } else {
        ocultarFilas(filas);
        mostrarFilasPorTipo(filas, filtroSelect);
    }
}

function ocultarFilas(filas) {
    for (var i = 0; i < filas.length; i++) {
        filas[i].style.display = 'none';
    }
}

function mostrarFilas(filas) {
    for (var i = 0; i < filas.length; i++) {
        filas[i].style.display = 'table-row';
    }
}

function mostrarFilasPorTipo(filas, filtroSelect) {
    for (var i = 0; i < filas.length; i++) {
        var tipo = filas[i].querySelector('td:first-child').textContent;

        if (tipo === filtroSelect) {
            filas[i].style.display = 'table-row';
        }
    }
}
