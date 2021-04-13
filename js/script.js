//Llamamos a la variable buscar del archivo html, que su nombre de id es "buscar y limpiar"
document.querySelector('#buscar').addEventListener('click', function () {
    obtenerDatos();
});
document.querySelector('#limpiar').addEventListener('click', function () {
    limpiar();
});

//Funcion generada para la extracion de datos
function obtenerDatos() {
    var cadena = document.getElementById("cadena").value;    //variable que contiene el valor en la caja de texto para buscar por su nombre
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cadena;    //Enlace parta el consuma de la API "The CocktailDB" que su clave gratuita es 1
    const api = new XMLHttpRequest();//Consulta mediante AJAX (peticiones y uso de respuesta en formato JSON)
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {//Manejo del evento de llamada
        
        if (this.status == 200 && this.readyState == 4) {//Verificamos si la respuesta es valida
            
            let datos = JSON.parse(this.responseText);//Convertimos la respuesta en un formato mas comodo
            dato = datos.drinks;            //simplificamos nuestros resultados y hacerlos mas directos hacia lo que buscamos
            var detalles = "";            //Variable para almacenar resultados deseados
            for (var i = 0; i < dato.length; i++) {                //Lenamos la nueva variable
                detalles += "<tr>" +
                    "<td>" + dato[i].idDrink + "</td>" +
                    "<td>" + dato[i].strCategory + "</td>" +
                    "<td>" + dato[i].strDrink + "</td>" +
                    "<td>" + dato[i].strAlcoholic + "</td>" +
                    "<td><img wit src=" + dato[i].strDrinkThumb + " width='50' heigt='50'></td>" +
                    "</tr>";
            }
            document.getElementById("tablaDetalles").innerHTML = detalles;            //Mandamos a dibujar en nuestra pagina dentro de una tabla
        }
    }
}
function limpiar() {//Funcion de limpiar los campos del sistema para una nueva busqueda
    var detalles = "";
    document.getElementById("cadena").value = "";
    for (var i = 0; i < dato.length; i++) {
        detalles += "<tr>"
        "</tr>";
    }
    document.getElementById("tablaDetalles").innerHTML = detalles;
}
