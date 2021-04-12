document.querySelector('#buscar').addEventListener('click', function () {
    obtenerDatos();
});
document.querySelector('#limpiar').addEventListener('click', function () {
    limpiar();
});
function obtenerDatos() {
    var cadena = document.getElementById("cadena").value;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cadena;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            dato = datos.drinks;
            console.log(dato);
            var detalles = "";
            for (var i = 0; i < dato.length; i++) {
                detalles += "<tr>" +
                    "<td>" + dato[i].idDrink + "</td>" +
                    "<td>" + dato[i].strCategory + "</td>" +
                    "<td>" + dato[i].strDrink + "</td>" +
                    "<td>" + dato[i].strAlcoholic + "</td>" +
                    "<td><img wit src=" + dato[i].strDrinkThumb + " width='50' heigt='50'></td>" +
                    "</tr>";
            }
            document.getElementById("tablaDetalles").innerHTML = detalles;
        }
    }
}

function limpiar() {
    var detalles = "";
    document.getElementById("cadena").value="";
    for (var i = 0; i < dato.length; i++) {
        detalles += "<tr>" 
         "</tr>";
    }
    document.getElementById("tablaDetalles").innerHTML = detalles;
}
