import React from 'react'
import { shallow } from 'enzyme'

import OrderDetailRow from '../../../../components/Orders/List/OrderDetailRow'

describe('OrderDetailRow', () => {
  let props

  beforeEach(() => {
    props = {
      order: {
        totalItems: 0,
        totalPrice: 0
      },
      index: 1,
      handleCompleteOrderClick: jest.fn(),
      handleEditOrderClick: jest.fn(),
      handleCancelOrderClick: jest.fn()
    }
  })

  test('renders correctly', () => {
    const component = shallow(<OrderDetailRow {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('calls the "complete" callback when the button is clicked', () => {
    const component = shallow(<OrderDetailRow {...props} />)
    expect(props.handleCompleteOrderClick.mock.calls.length).toEqual(0)
    component.find('.complete-order-btn').simulate('click')
    expect(props.handleCompleteOrderClick.mock.calls.length).toEqual(1)
  })

  test('calls the "edit" callback when the button is clicked', () => {
    const component = shallow(<OrderDetailRow {...props} />)
    expect(props.handleEditOrderClick.mock.calls.length).toEqual(0)
    component.find('.edit-order-btn').simulate('click')
    expect(props.handleEditOrderClick.mock.calls.length).toEqual(1)
  })

  test('calls the "cancel" callback when the button is clicked', () => {
    const component = shallow(<OrderDetailRow {...props} />)
    expect(props.handleCancelOrderClick.mock.calls.length).toEqual(0)
    component.find('.cancel-order-btn').simulate('click')
    expect(props.handleCancelOrderClick.mock.calls.length).toEqual(1)
  })
})
