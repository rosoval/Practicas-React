import { suma, resta, division, multiplicacion } from "./math.js";

export function crearHistorial(valor) {
  const nuevo = document.createElement("li");
  nuevo.textContent = valor;
  return nuevo;
}

const history = document.querySelector(".history");
export function agregarAlHistorial(historial) {
  history.appendChild(historial);
}

export const operar = (primerNumero, segundoNumero, operador) => {
  if (primerNumero !== "" && segundoNumero !== "" && operador !== null) {
    switch (operador) {
      case "+":
        return suma(primerNumero, segundoNumero);
      case "-":
        return resta(primerNumero, segundoNumero);
      case "X":
        return multiplicacion(primerNumero, segundoNumero);
      case "/":
        return division(primerNumero, segundoNumero);
    }
  }
};
