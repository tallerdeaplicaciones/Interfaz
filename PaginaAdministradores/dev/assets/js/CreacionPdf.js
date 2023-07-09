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
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [11, '11:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
        ], Trabajador1);
    });

    document.getElementById("Dia2").addEventListener("click", function () {
        generatePDF('02/06/2023', 'Día 2 de junio', [
            [1, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [3, '10:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 685, 8580],
            [4, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 3, 8949, 567, 9516],
            [5, '11:25', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [6, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [7, '11:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 407, 4692],
            [8, '11:59', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [9, '12:10', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 3, 8949, 1134, 9516],
            [10, '12:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 814, 2550],
            [11, '12:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 2, 7563.2, 2156, 9719.2],
            [12, '12:55', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670]
        ], Trabajador2);
    });
    document.getElementById("Dia3").addEventListener("click", function () {
        generatePDF('03/06/2023', 'Día 3 de junio', [
            [1, '10:10', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [3, '10:30', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [5, '10:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [6, '11:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 3, 10815, 2055, 12870],
            [7, '11:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [8, '11:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [9, '12:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [10, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:44', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [12, '12:56', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670]
        ], Trabajador1);
    });
    document.getElementById("Dia4").addEventListener("click", function () {
        generatePDF('04/06/2023', 'Día 4 de junio', [
            [1, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '10:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [3, '10:28', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [4, '10:36', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [5, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [6, '11:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [7, '11:45', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [8, '11:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [9, '12:10', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '12:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [11, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [12, '12:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580]
        ], Trabajador2);
    });
    document.getElementById("Dia5").addEventListener("click", function () {
        generatePDF('05/06/2023', 'Día 5 de junio', [
            [1, '09:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [2, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [3, '10:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [4, '10:30', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:49', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [6, '10:52', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [7, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [8, '11:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [9, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [10, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '12:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 5, 14915, 2834, 17750]
        ], Trabajador1);
    });
    document.getElementById("Dia6").addEventListener("click", function () {
        generatePDF('06/06/2023', 'Día 6 de junio', [
            [1, '09:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [3, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [4, '10:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [5, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 10, 21430, 4071, 25500],
            [6, '11:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [7, '11:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [8, '11:45', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [9, '11:55', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '12:58', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550]
        ], Trabajador2);
    });
    document.getElementById("Dia7").addEventListener("click", function () {
        generatePDF('07/06/2023', 'Día 7 de junio', [
            [1, '09:29', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [3, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [5, '10:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '10:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [8, '10:39', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [9, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [10, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [12, '12:46', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 10, 29830, 5668, 35500]
        ], Trabajador1);
    });
    document.getElementById("Dia8").addEventListener("click", function () {
        generatePDF('08/06/2023', 'Día 8 de junio', [
            [1, '09:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [4, '10:19', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [6, '11:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [7, '11:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [8, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [9, '11:45', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [10, '11:55', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [11, '12:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 5, 7940, 1509, 9450],
            [12, '12:36', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 5, 18025, 3425, 21450]
        ], Trabajador2);
    });
    document.getElementById("Dia9").addEventListener("click", function () {
        generatePDF('09/06/2023', 'Día 9 de junio', [
            [1, '09:49', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '09:57', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [3, '10:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [4, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [5, '10:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [6, '10:40', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [7, '10:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [8, '11:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [9, '11:25', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '11:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [11, '12:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 7, 20881, 3967, 24850],
            [12, '12:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670]
        ], Trabajador1);
    });
    document.getElementById("Dia10").addEventListener("click", function () {
        generatePDF('10/06/2023', 'Día 10 de junio', [
            [1, '09:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [2, '10:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [3, '10:29', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [5, '10:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [6, '11:18', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '11:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 9, 32445, 6165, 38610],
            [8, '11:39', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [9, '12:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [10, '12:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [11, '12:35', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [12, '12:48', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290]
        ], Trabajador2);
    });
    document.getElementById("Dia11").addEventListener("click", function () {
        generatePDF('11/06/2023', 'Día 11 de junio', [
            [1, '09:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [2, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [3, '10:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [4, '10:30', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:49', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [6, '10:52', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [7, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [8, '11:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [9, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [10, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '12:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 5, 14915, 2834, 17750]
        ], Trabajador1);
    });
    document.getElementById("Dia12").addEventListener("click", function () {
        generatePDF('12/06/2023', 'Día 12 de junio', [
            [1, '09:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [3, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [4, '10:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [5, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 10, 21430, 4071, 25500],
            [6, '11:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [7, '11:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [8, '11:45', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [9, '11:55', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '12:58', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550]
        ], Trabajador2);
    });
    document.getElementById("Dia13").addEventListener("click", function () {
        generatePDF('13/06/2023', 'Día 13 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [11, '11:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
        ], Trabajador1);
    });
    document.getElementById("Dia14").addEventListener("click", function () {
        generatePDF('14/06/2023', 'Día 14 de junio', [
            [1, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [3, '10:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 685, 8580],
            [4, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 3, 8949, 567, 9516],
            [5, '11:25', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [6, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [7, '11:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 407, 4692],
            [8, '11:59', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [9, '12:10', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 3, 8949, 1134, 9516],
            [10, '12:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 814, 2550],
            [11, '12:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 2, 7563.2, 2156, 9719.2],
            [12, '12:55', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670]
        ], Trabajador2);
    });
    document.getElementById("Dia15").addEventListener("click", function () {
        generatePDF('15/06/2023', 'Día 15 de junio', [
            [1, '09:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [2, '10:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [3, '10:29', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [5, '10:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [6, '11:18', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '11:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 9, 32445, 6165, 38610],
            [8, '11:39', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [9, '12:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [10, '12:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [11, '12:35', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [12, '12:48', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290]
        ], Trabajador1);
    });
    document.getElementById("Dia16").addEventListener("click", function () {
        generatePDF('16/06/2023', 'Día 16 de junio', [
            [1, '09:49', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '09:57', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [3, '10:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [4, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [5, '10:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [6, '10:40', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [7, '10:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [8, '11:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [9, '11:25', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '11:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [11, '12:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 7, 20881, 3967, 24850],
            [12, '12:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670]
        ], Trabajador1);
    });
    document.getElementById("Dia17").addEventListener("click", function () {
        generatePDF('17/06/2023', 'Día 17 de junio', [
            [1, '09:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [4, '10:19', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [6, '11:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [7, '11:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [8, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [9, '11:45', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [10, '11:55', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [11, '12:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 5, 7940, 1509, 9450],
            [12, '12:36', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 5, 18025, 3425, 21450]
        ], Trabajador2);
    });
    document.getElementById("Dia18").addEventListener("click", function () {
        generatePDF('18/06/2023', 'Día 18 de junio', [
            [1, '09:29', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [3, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [5, '10:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '10:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [8, '10:39', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [9, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [10, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [12, '12:46', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 10, 29830, 5668, 35500]
        ], Trabajador1);
    });
    document.getElementById("Dia19").addEventListener("click", function () {
        generatePDF('19/06/2023', 'Día 19 de junio', [
            [1, '10:10', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [3, '10:30', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [5, '10:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [6, '11:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 3, 10815, 2055, 12870],
            [7, '11:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [8, '11:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [9, '12:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [10, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:44', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [12, '12:56', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670]
        ], Trabajador1);
    });
    document.getElementById("Dia20").addEventListener("click", function () {
        generatePDF('20/06/2023', 'Día 20 de junio', [
            [1, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '10:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [3, '10:28', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [4, '10:36', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [5, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [6, '11:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [7, '11:45', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [8, '11:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [9, '12:10', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '12:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [11, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [12, '12:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580]
        ], Trabajador2);
    });
    document.getElementById("Dia21").addEventListener("click", function () {
        generatePDF('21/06/2023', 'Día 21 de junio', [
            [1, '09:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [2, '10:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [3, '10:29', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [5, '10:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [6, '11:18', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '11:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 9, 32445, 6165, 38610],
            [8, '11:39', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [9, '12:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [10, '12:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [11, '12:35', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [12, '12:48', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290]
        ], Trabajador1);
    });
    document.getElementById("Dia22").addEventListener("click", function () {
        generatePDF('22/06/2023', 'Día 22 de junio', [
            [1, '09:49', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '09:57', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [3, '10:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [4, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [5, '10:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [6, '10:40', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [7, '10:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [8, '11:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [9, '11:25', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '11:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [11, '12:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 7, 20881, 3967, 24850],
            [12, '12:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670]
        ], Trabajador2);
    });
    document.getElementById("Dia23").addEventListener("click", function () {
        generatePDF('23/06/2023', 'Día 23 de junio', [
            [1, '09:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [4, '10:19', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [6, '11:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [7, '11:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [8, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [9, '11:45', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [10, '11:55', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [11, '12:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 5, 7940, 1509, 9450],
            [12, '12:36', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 5, 18025, 3425, 21450]
        ], Trabajador1);
    });
    document.getElementById("Dia24").addEventListener("click", function () {
        generatePDF('24/06/2023', 'Día 24 de junio', [
            [1, '09:29', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [3, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [5, '10:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '10:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [8, '10:39', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [9, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [10, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [12, '12:46', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 10, 29830, 5668, 35500]
        ], Trabajador2);
    });
    document.getElementById("Dia25").addEventListener("click", function () {
        generatePDF('25/06/2023', 'Día 25 de junio', [
            [1, '09:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [3, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [4, '10:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [5, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 10, 21430, 4071, 25500],
            [6, '11:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [7, '11:35', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [8, '11:45', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [9, '11:55', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:40', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '12:58', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550]
        ], Trabajador1);
    });
    document.getElementById("Dia26").addEventListener("click", function () {
        generatePDF('26/06/2023', 'Día 26 de junio', [
            [1, '09:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [2, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [3, '10:25', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [4, '10:30', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:49', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [6, '10:52', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [7, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [8, '11:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [9, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [10, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '12:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 5, 14915, 2834, 17750]
        ], Trabajador2);
    });
    document.getElementById("Dia27").addEventListener("click", function () {
        generatePDF('27/06/2023', 'Día 27 de junio', [
            [1, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [2, '10:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [3, '10:28', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [4, '10:36', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [5, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [6, '11:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [7, '11:45', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [8, '11:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [9, '12:10', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [10, '12:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [11, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [12, '12:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580]
        ], Trabajador1);
    });
    document.getElementById("Dia28").addEventListener("click", function () {
        generatePDF('28/06/2023', 'Día 28 de junio', [
            [1, '10:10', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '10:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [3, '10:30', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [4, '10:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [5, '10:52', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
            [6, '11:15', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 3, 10815, 2055, 12870],
            [7, '11:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [8, '11:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [9, '12:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [10, '12:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [11, '12:44', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [12, '12:56', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670]
        ], Trabajador2);
    });
    document.getElementById("Dia29").addEventListener("click", function () {
        generatePDF('29/06/2023', 'Día 29 de junio', [
            [1, '09:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [4, '10:00', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:15', 'Antigrasas Multiuso KH-7	', 'Artículo Limpieza', 3605, 1, 3605, 685, 4290],
            [6, '10:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [7, '10:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [8, '10:45', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [9, '10:59', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [10, '11:15', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [11, '11:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [12, '11:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 1, 1588, 302, 1890],
        ], Trabajador1);
    });
    document.getElementById("Dia30").addEventListener("click", function () {
        generatePDF('30/06/2023', 'Día 30 de junio', [
            [1, '09:28', 'Antigrasas Mrdd. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [2, '09:30', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [3, '09:45', 'Detergente líquido Ariel', 'Artículo Limpieza', 3781.6, 3, 11345, 2156, 13500],
            [4, '10:19', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [5, '10:26', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 2, 5966, 1134, 7100],
            [6, '11:15', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588.3, 3, 4765, 905, 5670],
            [7, '11:20', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 1, 2143, 407, 2550],
            [8, '11:37', 'Limpiador de piso Clorox', 'Artículo Hogar', 2143, 2, 4286, 814, 5100],
            [9, '11:45', 'Antigrasas Mr. Músculo', 'Artículo Limpieza', 2983, 1, 2983, 567, 3550],
            [10, '11:55', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 2, 7210, 1370, 8580],
            [11, '12:32', 'Lavalozas Ecológico Fuzol', 'Artículo Limpieza', 1588, 5, 7940, 1509, 9450],
            [12, '12:36', 'Antigrasas Multiuso KH-7', 'Artículo Limpieza', 3605, 5, 18025, 3425, 21450]
        ], Trabajador2);
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

            business: {
                name: "El Tunel",
                address: "Santa maria 3834",
                phone: "(+56) 947526985",
                email: "BazarVenta@gmail.com"
            },
            contact: contact,

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
            pageLabel: "Pagina ",
        };

        var pdfObject = jsPDFInvoiceTemplate.default(props);
        console.log("Objeto creado:", pdfObject);
    }
});
