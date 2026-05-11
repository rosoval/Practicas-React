import { crearHistorial, operar, agregarAlHistorial } from "./funciones.js";

/* POR HACER: funcionalidad */
const input = document.getElementById("result");
const form = document.querySelector("form");
const numbers = form.querySelectorAll("form > button");
const operators = form.querySelectorAll(".operadores button");
const history = document.querySelector(".history");
const clearAll = document.getElementById("clearAll");

const escribirEnInput = (e) => {
  input.value += e.target.textContent;
};

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", escribirEnInput);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const limpiar = () => {
  input.value = "";
  primerNumero = null;
  segundoNumero = null;
  historial_temporal = null;
};

clearAll.addEventListener("click", () => {
  limpiar();
  history.innerHTML = "";
});

let primerNumero = null;
let segundoNumero = null;
let operador = null;
let historial_temporal = null;

for (let j = 0; j < operators.length; j++) {
  operators[j].addEventListener("click", (event) => {
    if (isNaN(input.value) || input.value === "") return;

    const inputValue = Number(input.value);
    const inputOperator = event.target.textContent;

    if (event.target.textContent !== "=") {
      if (!primerNumero) {
        primerNumero = inputValue;
        operador = inputOperator;
        historial_temporal = crearHistorial(primerNumero + " " + operador);
        agregarAlHistorial(historial_temporal);
        input.value = "";
      } else {
        segundoNumero = inputValue;
        const resultado = operar(primerNumero, segundoNumero, operador);
        historial_temporal.textContent = `${primerNumero} ${operador} ${segundoNumero} = ${resultado}`;
        limpiar();

        primerNumero = resultado;
        operador = inputOperator;
        historial_temporal = crearHistorial(primerNumero + " " + operador);
        agregarAlHistorial(historial_temporal);
      }
    } else {
      segundoNumero = inputValue;
      historial_temporal.textContent = `${primerNumero} ${operador} ${segundoNumero} = ${operar(primerNumero, segundoNumero, operador)}`;
      limpiar();
    }
  });
}
