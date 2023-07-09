function filtrarPorVendedor() {
    var vendedorSeleccionado = document.getElementById("vendedor").value;
    var filas = document.querySelectorAll("#tablaVentas tbody tr");

    for (var i = 0; i < filas.length; i++) {
        var vendedor = filas[i].querySelector("td:nth-child(3)").textContent;
        if (vendedor === vendedorSeleccionado || vendedorSeleccionado === "") {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}