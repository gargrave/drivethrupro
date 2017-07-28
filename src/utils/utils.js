export function displayAsDollars (cents) {
  return `$ ${(cents * 0.01).toFixed(2)}`
}
