"use strict";

var siguiente = document.getElementById('siguiente');
var anterior = document.getElementById('anterior');
siguiente.addEventListener('click', siguientePag);
anterior.addEventListener('click', anteriorPag);

function siguientePag(e) {
  e.preventDefault();
  var actual = new URLSearchParams(window.location.search);
  console.log(actual);
  var page = Number(actual.get('page')) + 1;
  var min = actual.get('min');
  var max = actual.get('max');
  var hab = actual.get('hab');
  window.location.replace("http://localhost:4000/aptos/filter?min=".concat(min, "&max=").concat(max, "&hab=").concat(hab, "&page=").concat(page));
  console.log(myParam);
}

function anteriorPag(e) {
  e.preventDefault();
  var actual = new URLSearchParams(window.location.search);
  var page = Number(actual.get('page')) - 1;
  var min = actual.get('min');
  var max = actual.get('max');
  var hab = actual.get('hab');

  if (page === 0) {
    return;
  }

  window.location.replace("http://localhost:4000/aptos/filter?min=".concat(min, "&max=").concat(max, "&hab=").concat(hab, "&page=").concat(page));
}