export function suma(numero1, numero2) {
  return numero1 + numero2;
}

export function resta(numero1, numero2) {
  return numero1 - numero2;
}

export function division(numero1, numero2) {
  if (numero2 == 0) {
    return null;
  }
  return numero1 / numero2;
}

export function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}
