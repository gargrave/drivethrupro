import React from 'react'
import { shallow } from 'enzyme'

import OrderItemForm from '../../../../components/Orders/Edit/OrderItemForm'
import OrderProductMenu from '../../../../components/Orders/Edit/OrderProductMenu'
import OrderQuantityMenu from '../../../../components/Orders/Edit/OrderQuantityMenu'
import OrderSizeMenu from '../../../../components/Orders/Edit/OrderSizeMenu'

import menu from '../../../../data/menu-items'

describe('OrderItemForm', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      menu,
      selectedMenuItem: menu[0],
      handleItemChange: jest.fn(),
      sizeIdx: 0,
      handleSizeChange: jest.fn(),
      quantity: 1,
      handleQuantityChange: jest.fn(),
      handleAddToOrderClick: jest.fn(),
      handleResetFormClick: jest.fn()
    }

    component = shallow(<OrderItemForm {...props} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('renders the correct number of expected child component', () => {
    expect(component.find(OrderProductMenu).length).toEqual(1)
    expect(component.find(OrderQuantityMenu).length).toEqual(1)
    expect(component.find(OrderSizeMenu).length).toEqual(1)
  })

  test('calls the "add to order" callback when the button is clicked', () => {
    expect(props.handleAddToOrderClick.mock.calls.length).toEqual(0)
    component.find('.add-to-order-button').simulate('click')
    expect(props.handleAddToOrderClick.mock.calls.length).toEqual(1)
  })
})
