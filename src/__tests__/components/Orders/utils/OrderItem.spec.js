import OrderItem from '../../../../components/Orders/utils/OrderItem'

const sizes = [{ name: 'Small', price: 49 }, { name: 'Medium', price: 69 }, { name: 'Large', price: 89 }]

test('OrderItem should create an object with the expected properties', () => {
  const name = 'Awesome OrderItem'
  const qty = 42
  const size = sizes[1]
  const oi = new OrderItem(name, qty, size)

  expect(oi.id).toBeDefined()
  expect(typeof oi.id).toEqual('number')

  expect(oi.name).toBeDefined()
  expect(typeof oi.name).toEqual('string')
  expect(oi.name).toEqual(`${name} (${size.name})`)

  expect(oi.quantity).toBeDefined()
  expect(typeof oi.quantity).toEqual('number')
  expect(oi.quantity).toEqual(qty)

  expect(oi.pricePerUnit).toBeDefined()
  expect(typeof oi.pricePerUnit).toEqual('number')
  expect(oi.pricePerUnit).toEqual(size.price)

  expect(oi.totalPrice).toBeDefined()
  expect(typeof oi.totalPrice).toEqual('number')
  expect(oi.totalPrice).toEqual(size.price * qty)
})
