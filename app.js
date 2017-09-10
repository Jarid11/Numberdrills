function isDivisible(divisee, divisor) {
   // the modulo operator (%) divides the
   // number to the left of it by the  number
   // to the right, and returns the remainder,
   // if any. if % returns 0, we know that the
   // number to the right is a divisor of the
   // number to the left.
   return divisee % divisor === 0;
}
console.log(isDivisible(10, 2));

function computeArea(width, height) {
  return width * height;
}

console.log(computeArea(100, 250));

function celsToFahr(celsTemp) {
  return celsTemp * 1.8 + 32;
}

console.log(celsToFahr(40));

function fahrToCels(fahrTemp) {
  return (fahrTemp - 32) / 1.8;
}

console.log(fahrToCels(52));
