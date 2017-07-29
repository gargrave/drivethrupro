let nextID = 1

export default class Order {
  constructor (otherOrder) {
    if (otherOrder) {
      this.id = otherOrder.id
      this.items = otherOrder.items
      this.totalItems = otherOrder.totalItems
      this.totalPrice = otherOrder.totalPrice
    } else {
      this.id = nextID++
      this.items = []
      this.totalItems = 0
      this.totalPrice = 0
    }
  }
}
