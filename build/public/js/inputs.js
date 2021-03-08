"use strict";

var boton = document.querySelector('#buscar');

function cargarEventListeners() {
  boton.addEventListener('click', minMax);
}

var minMax = function minMax(e) {
  console.log('Entramos a la función');
  var min = document.querySelector('#min').value;
  var max = document.querySelector('#max').value;

  if (min > max) {
    e.preventDefault();
    window.alert("El precio mínimo debe ser mayor al precio máximo");
  }

  console.log(min);
  console.log(max);
};

cargarEventListeners();