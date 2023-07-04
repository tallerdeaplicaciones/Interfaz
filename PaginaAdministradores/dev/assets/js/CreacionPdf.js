document.addEventListener("DOMContentLoaded", function () {
    var Trabajador1 = {
        label: "Vendedor:",
        name: "María Gutiérrez",
        address: "capitán Ávalos 3948",
        phone: "(+56) 956982314",
        email: "maria@gmail.com",
    };

    var Trabajador2 = {
        label: "Vendedor:",
        name: "Juan Pérez",
        address: "calle lastarria 1258",
        phone: "(+56) 987654321",
        email: "juan@gmail.com",
    };

    document.getElementById("Dia1").addEventListener("click", function () {
        generatePDF('01/06/2023', 'Día 1 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 1
    });

    document.getElementById("Dia2").addEventListener("click", function () {
        generatePDF('02/06/2023', 'Día 2 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia3").addEventListener("click", function () {
        generatePDF('03/06/2023', 'Día 3 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia4").addEventListener("click", function () {
        generatePDF('04/06/2023', 'Día 4 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia5").addEventListener("click", function () {
        generatePDF('05/06/2023', 'Día 5 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia6").addEventListener("click", function () {
        generatePDF('06/06/2023', 'Día 6 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia7").addEventListener("click", function () {
        generatePDF('07/06/2023', 'Día 7 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia8").addEventListener("click", function () {
        generatePDF('08/06/2023', 'Día 8 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia9").addEventListener("click", function () {
        generatePDF('09/06/2023', 'Día 9 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia10").addEventListener("click", function () {
        generatePDF('10/06/2023', 'Día 10 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia11").addEventListener("click", function () {
        generatePDF('11/06/2023', 'Día 11 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia12").addEventListener("click", function () {
        generatePDF('12/06/2023', 'Día 12 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia13").addEventListener("click", function () {
        generatePDF('13/06/2023', 'Día 13 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia14").addEventListener("click", function () {
        generatePDF('14/06/2023', 'Día 14 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia15").addEventListener("click", function () {
        generatePDF('15/06/2023', 'Día 15 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia16").addEventListener("click", function () {
        generatePDF('16/06/2023', 'Día 16 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia17").addEventListener("click", function () {
        generatePDF('17/06/2023', 'Día 17 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia18").addEventListener("click", function () {
        generatePDF('18/06/2023', 'Día 18 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia19").addEventListener("click", function () {
        generatePDF('19/06/2023', 'Día 19 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia20").addEventListener("click", function () {
        generatePDF('20/06/2023', 'Día 20 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia21").addEventListener("click", function () {
        generatePDF('21/06/2023', 'Día 21 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia22").addEventListener("click", function () {
        generatePDF('22/06/2023', 'Día 22 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia23").addEventListener("click", function () {
        generatePDF('23/06/2023', 'Día 23 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia24").addEventListener("click", function () {
        generatePDF('24/06/2023', 'Día 24 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia25").addEventListener("click", function () {
        generatePDF('25/06/2023', 'Día 25 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia26").addEventListener("click", function () {
        generatePDF('26/06/2023', 'Día 26 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia27").addEventListener("click", function () {
        generatePDF('27/06/2023', 'Día 27 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia28").addEventListener("click", function () {
        generatePDF('28/06/2023', 'Día 28 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia29").addEventListener("click", function () {
        generatePDF('29/06/2023', 'Día 29 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador1); // Pasar el objeto contact correspondiente al día 2
    });
    document.getElementById("Dia30").addEventListener("click", function () {
        generatePDF('30/06/2023', 'Día 30 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 500, 3, 1500, 285, 1215],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 300, 5, 1500, 285, 1215],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 200, 4, 800, 152, 648],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 1000, 2, 2000, 380, 1620],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [11, '11:26', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [13, '11:48', 'Limpiador de piso Clorox', 'Artículo Hogar', 700, 3, 2100, 399, 1701],
            [14, '12:08', 'Detergente líquido Ariel', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
            [15, '12:19', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 700, 3, 2100, 399, 1701],
        ], Trabajador2); // Pasar el objeto contact correspondiente al día 2
    });


    // Agrega más eventos para otros días

    function generatePDF(date, title, data, contact) {
        var props = {
            outputType: jsPDFInvoiceTemplate.OutputType.Save,
            returnJsPDFDocObject: true,
            fileName: "Documento 2023",
            orientationLandscape: false,
            compress: true,
            logo: {
                src: "https://raw.githubusercontent.com/tallerdeaplicaciones/Interfaz/main/PaginaAdministradores/dev/assets/img/imagen-tunel.jpg",
                type: 'jpg',
                width: 53.33,
                height: 26.66,
                margin: {
                    top: 0,
                    left: 0
                }
            },
            stamp: {
                inAllPages: true,
                src: "../assets/img/imagen-tunel.jpg",
                type: 'jpg',
                width: 20,
                height: 20,
                margin: {
                    top: 0,
                    left: 0
                }
            },
            business: {
                name: "El Tunel",
                address: "Santa maria 3834",
                phone: "(+56) 947526985",
                email: "BazarVenta@gmail.com"
            },
            contact: contact, // Objeto contact según la fecha

            invoice: {
                invDate: "Date: " + date,
                headerBorder: false,
                tableBodyBorder: false,
                header: [
                    {
                        title: "#",
                        style: {
                            width: 10
                        }
                    },
                    {
                        title: "Hora",
                        style: {
                            width: 15
                        }
                    },
                    {
                        title: "Producto",
                        style: {
                            width: 50
                        }
                    },
                    {
                        title: "Descripción",
                        style: {
                            width: 30
                        }
                    },
                    {
                        title: "Precio",
                        style: {
                            width: 15
                        }
                    },
                    {
                        title: "Cantidad",
                        style: {
                            width: 20
                        }
                    },
                    {
                        title: "Importe",
                        style: {
                            width: 15
                        }
                    },
                    {
                        title: "Impuesto (19%)",
                        style: {
                            width: 25
                        }
                    },
                    {
                        title: "Total",
                        style: {
                            width: 35
                        }
                    }
                ],
                table: data,
                
            },
            footer: {
                text: "El Tunel | 3834 Santa Maria, Arica | Teléfono: (+56) 947526985",
            },
            pageEnable: true,
            pageLabel: "Page ",
        };

        // Generar el PDF con los datos proporcionados
        var pdfObject = jsPDFInvoiceTemplate.default(props);
        console.log("Objeto creado:", pdfObject);
    }
}); // Agrega esta llave de cierre
