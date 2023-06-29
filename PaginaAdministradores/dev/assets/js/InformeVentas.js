function filtrarPorVendedor() {
    var vendedorSeleccionado = document.getElementById("vendedor").value;
    var filas = document.querySelectorAll("#tablaVentas tbody tr");
    
    filas.forEach(function(fila) {
        var vendedorFila = fila.cells[1].textContent.trim().toLowerCase();
        if (vendedorFila !== vendedorSeleccionado && vendedorSeleccionado !== "") {
            fila.style.display = "none";
        } else {
            fila.style.display = "";
        }
    });
}

