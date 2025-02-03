/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // de aca cambiamos la information en el html
  const primeraPinta = document.querySelector("#PintaArriba");
  const segundaPinta = document.querySelector("#PintaAbajo");
  const valorCarta = document.querySelector("#Valor");

  //Esta es la nueva informacion}

  const pintas = ["♠", "♦", "♣", "♥"];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  //generamos el valor random

  function informacionRandom(list) {
    let randomValue = Math.floor(Math.random() * list.length);
    return list[randomValue];
  }

  let randomPinta = informacionRandom(pintas);
  let randomValor = informacionRandom(valores);
  primeraPinta.innerHTML = randomPinta;
  segundaPinta.innerHTML = randomPinta;
  valorCarta.innerHTML = randomValor;
  if (randomPinta == "♦" || randomPinta == "♥");
  primeraPinta.style.color = "red";
  segundaPinta.style.color = "red";
};
