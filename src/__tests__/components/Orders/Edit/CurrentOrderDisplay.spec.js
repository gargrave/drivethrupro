import React from 'react'
import { shallow } from 'enzyme'

import { displayAsDollars } from '../../../../utils/utils'
import CurrentOrderDisplay from '../../../../components/Orders/Edit/CurrentOrderDisplay'
import OrderItemRow from '../../../../components/Orders/Edit/OrderItemRow'

import Order from '../../../../components/Orders/utils/Order'
import OrderItem from '../../../../components/Orders/utils/OrderItem'

const sizes = [{ name: 'Small', price: 49 }, { name: 'Medium', price: 69 }, { name: 'Large', price: 89 }]

describe('CurrentOrderDisplay', () => {
  let order
  let props
  let component

  beforeEach(() => {
    order = new Order()
    order.addItem(new OrderItem('Item A', 1, sizes[0]))
    order.addItem(new OrderItem('Item B', 2, sizes[1]))

    props = {
      order,
      handleRemoveItemClick: jest.fn()
    }

    component = shallow(<CurrentOrderDisplay {...props} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('display the correct current price', () => {
    const actual = component.find('.current-order-total-price').text()
    const expected = displayAsDollars(order.totalPrice)
    expect(actual.indexOf(expected)).not.toEqual(-1)
  })

  test('display render the correct number of item rows', () => {
    const actual = component.find(OrderItemRow).length
    const expected = order.items.length
    expect(actual).toEqual(expected)
  })
})
