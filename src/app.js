/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// pasos:
// 1) definir los palos y numeros de cartas
// 2) generar funcion para crear carta (tiene que tener un createElement con div (dentro del div parte de arriba, medio y abajo)
// 3) funcion que luego de creada las reparta
// 4) generar funcion para ordenar esas cartas (hay que mostrar con bubble y que se muestyre el proceso de ordenado)
// 5) Event listeners para que funcione (leer el input de numero, el boton de crear carta y el de ordenar carta)

// 1)
let palos = ["♠", "♣", "♦", "♥"];
let numerosYLetras = [
  "A",
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
  "K"
];

// 2)
function crearCarta(palo, numero) {
  const carta = document.createElement("div");
  carta.classList.add(
    "carta",
    "mt-3",
    "p-1",
    palo === "♥" || palo === "♦" ? "red" : "black"
  );

  const paloArriba = document.createElement("div");
  paloArriba.classList.add("paloArriba", "text-start", "m-0");
  paloArriba.textContent = palo;

  const numeroLetra = document.createElement("div");
  numeroLetra.classList.add("numeroLetra", "text-center");
  numeroLetra.textContent = numero;

  const paloAbajo = document.createElement("div");
  paloArriba.classList.add("paloAbajo", "text-end", "m-0");
  paloArriba.textContent = palo;

  carta.appendChild(paloArriba);
  carta.appendChild(numeroLetra);
  carta.appendChild(paloAbajo);

  return carta;
}

// 3
function repartirCartas(numeroIngresado) {
  cartas = [];
  const cartasRepartidas = document.querySelector("cartasMano");
  cartasRepartidas.innerHTML = "";

  for (let i = 0; i < numeroIngresado; i++) {
    const paloRandom = palos(Math.floor(Math.random() * palos.length));
    const numerosYLetrasRandom = numerosYLetras(
      Math.floor(Math.random()) * numerosYLetras.length
    );
    const carta = { palo: paloRandom, numero: numerosYLetrasRandom };
    cartas.push(carta);

    cartasRepartidas.appendChild;
  }
}

// 4)
function ordenarCartas() {}

// 5)
