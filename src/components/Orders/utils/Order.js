let nextID = 0

export default class Order {
  constructor (items) {
    this.id = nextID++
    this.items = items

    this.totalPrice = 0
    this.totalItems = 0
    for (let i = 0; i < items.length; i++) {
      const orderItem = items[i]
      this.totalItems += orderItem.quantity
      this.totalPrice += orderItem.quantity * orderItem.pricePerUnit
    }
  }
}
