import React from 'react'
import { shallow } from 'enzyme'

import { displayAsDollars } from '../../../../utils/utils'
import OrderItemRow from '../../../../components/Orders/Edit/OrderItemRow'

describe('OrderItemRow', () => {
  let props

  beforeEach(() => {
    props = {
      item: {
        name: 'Test Item',
        quantity: 2,
        pricePerUnit: 5
      },
      handleRemoveItemClick: jest.fn()
    }
  })

  test('renders correctly', () => {
    const component = shallow(<OrderItemRow {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('calls the "complete" callback when the button is clicked', () => {
    const component = shallow(<OrderItemRow {...props} />)
    expect(props.handleRemoveItemClick.mock.calls.length).toEqual(0)
    component.find('.remove-item-button').simulate('click')
    expect(props.handleRemoveItemClick.mock.calls.length).toEqual(1)
  })

  test('renders the name of the item', () => {
    const component = shallow(<OrderItemRow {...props} />)
    const text = component.find('.order-item-row-name').text()
    expect(text.indexOf(props.item.name)).not.toEqual(-1)
  })

  test('renders the quantity and price-per-unit of the item', () => {
    const component = shallow(<OrderItemRow {...props} />)
    const text = component.find('.order-item-row-quantity').text()
    expect(text.indexOf(props.item.quantity)).not.toEqual(-1)
    expect(text.indexOf(props.item.pricePerUnit)).not.toEqual(-1)
  })

  test('renders the total price of the item', () => {
    const component = shallow(<OrderItemRow {...props} />)
    const text = component.find('.order-item-row-price').text()
    const expected = displayAsDollars(props.item.quantity * props.item.pricePerUnit)
    expect(text).toEqual(expected)
  })
})
