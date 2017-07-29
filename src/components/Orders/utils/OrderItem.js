/*
A simple utility class for keeping track of a single line item within an order.
*/
let nextID = 1

export default class OrderItem {
  constructor (name, quantity, size) {
    this.id = nextID++
    this.name = `${name} (${size.name})`
    this.quantity = quantity
    this.pricePerUnit = size.price
    this.totalPrice = this.quantity * this.pricePerUnit
  }
}
