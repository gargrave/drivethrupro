export function displayAsDollars (cents) {
  if (!Number.isInteger(cents)) {
    throw new TypeError('"cents" must be an Integer.')
  }

  const prefix = cents < 0 ? '-' : ''
  const absValue = Math.abs(cents * 0.01)
  return `${prefix}$${absValue.toFixed(2)}`
}
