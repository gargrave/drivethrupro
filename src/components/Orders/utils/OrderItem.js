let nextID = 0

export default class OrderItem {
  constructor (name, quantity, size) {
    this.id = nextID++
    this.name = `${name} (${size.name})`
    this.quantity = quantity
    this.pricePerUnit = size.price
    this.totalPrice = this.quantity * this.pricePerUnit
  }
}
