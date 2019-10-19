//Mapa y dato de validacion
var latit = 55.7522202;
var long = 37.6155586;
var viewLa = latit;
var viewLo = long;
var mymap = L.map('mapid').setView([viewLa, viewLo], 5);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 14,
  minZoom: 3,
  id: 'mapbox.satellite'
}).addTo(mymap);
blueCircle(event);

//Colores y eventos de los circulos
function greenCircle(e) {
    var circle = L.circle([viewLa, viewLo], {
      color: 'green',
      fillColor: '#0F0',
      fillOpacity: 0.7,
      radius: 150000
    }).addTo(mymap);
  }
  function redCircle(e) {
    var circle = L.circle([viewLa, viewLo], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.7,
      radius: 150000
    }).addTo(mymap);
  }
  function blueCircle(e){
    var circle = L.circle([viewLa, viewLo], {
      color: 'celeste',
      fillColor: '#736AFF',
      fillOpacity: 0.4,
      radius: 150000
    }).addTo(mymap);
  }

//Dato de validacion para un resultado positivo (verde)
function myJsFunction(){
    var text=document.getElementById('input1').value;
    if (text == "Argentina"){
      greenCircle(event);
    } else{
      redCircle(event);
    }
  }
