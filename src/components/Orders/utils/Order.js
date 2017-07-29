/*
A simple utility class for keeping track of details relating to an order.

If an existing Order object is passed, its data will be copied into this one;
this is useful for editing existing orders while maintaining the data (particularly the ID).

If nothing is passed in, a new Order will be created with default values.
*/

// A simple "primary key" mock for each object (i.e. to mock the functionality of a DB)
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

  addItem (orderItem) {
    this.items.push(orderItem)
    this.totalPrice += orderItem.totalPrice
    this.totalItems += orderItem.quantity
  }

  removeItem (orderItem) {
    if (this.items.find(i => i.id === orderItem.id)) {
      this.items = this.items.filter(i => i.id !== orderItem.id)
      this.totalPrice -= orderItem.totalPrice
      this.totalItems -= orderItem.quantity
    }
  }
}
