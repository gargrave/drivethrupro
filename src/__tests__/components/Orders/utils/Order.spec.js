import Order from '../../../../components/Orders/utils/Order'
import OrderItem from '../../../../components/Orders/utils/OrderItem'

const sizes = [{ name: 'Small', price: 49 }, { name: 'Medium', price: 69 }, { name: 'Large', price: 89 }]

const items = [
  new OrderItem('Item A', 1, sizes[0]),
  new OrderItem('Item B', 2, sizes[2]),
  new OrderItem('Item C', 5, sizes[1])
]

test('Order should create an object with the expected properties', () => {
  const order = new Order()

  expect(order.id).toBeDefined()
  expect(typeof order.id).toEqual('number')

  expect(order.items).toBeDefined()
  expect(order.items instanceof Array).toBeTruthy()
  expect(order.items).toEqual([])

  expect(order.totalItems).toBeDefined()
  expect(typeof order.totalItems).toEqual('number')
  expect(order.totalItems).toEqual(0)

  expect(order.totalPrice).toBeDefined()
  expect(typeof order.totalPrice).toEqual('number')
  expect(order.totalPrice).toEqual(0)
})

test('Order should correctly duplicate another Order', () => {
  const orderA = new Order()
  orderA.addItem(items[0])
  orderA.addItem(items[1])

  const orderB = new Order(orderA)
  expect(orderB.items.length).toEqual(orderA.items.length)
  expect(orderB.totalItems).toEqual(orderA.totalItems)
  expect(orderB.totalPrice).toEqual(orderA.totalPrice)
})

test('Order.addItem() should update all properties correct', () => {
  const order = new Order()
  const itemA = items[1]
  const itemB = items[2]

  order.addItem(itemA)

  expect(order.items.length).toEqual(1)
  expect(order.totalItems).toEqual(itemA.quantity)
  expect(order.totalPrice).toEqual(itemA.totalPrice)

  order.addItem(itemB)
  expect(order.items.length).toEqual(2)
  expect(order.totalItems).toEqual(itemA.quantity + itemB.quantity)
  expect(order.totalPrice).toEqual(itemA.totalPrice + itemB.totalPrice)
})

test('Order.removeItem() should update all properties correct', () => {
  const order = new Order()
  const itemA = items[1]
  const itemB = items[2]

  order.addItem(itemA)
  order.addItem(itemB)
  order.removeItem(itemB)

  expect(order.items.length).toEqual(1)
  expect(order.totalItems).toEqual(itemA.quantity)
  expect(order.totalPrice).toEqual(itemA.totalPrice)

  order.removeItem(itemA)
  expect(order.items.length).toEqual(0)
  expect(order.totalItems).toEqual(0)
  expect(order.totalPrice).toEqual(0)
})

test('Order.removeItem() should ignore orders that are not in the collection', () => {
  const order = new Order()
  const itemA = items[1]
  const itemB = items[2]

  order.addItem(itemA)
  order.removeItem(itemB)
  expect(order.items.length).toEqual(1)
  expect(order.totalItems).toEqual(itemA.quantity)
  expect(order.totalPrice).toEqual(itemA.totalPrice)
})
