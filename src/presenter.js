import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstFactor = document.querySelector("#primer-numeroM");
const secondFactor = document.querySelector("#segundo-numeroM");
const formMultiplicar = document.querySelector("#multiplicar-form");
const divProducto = document.querySelector("#resultadoM-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMultiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstFactor.value);
  const secondNumber = Number.parseInt(secondFactor.value);

  divProducto.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
