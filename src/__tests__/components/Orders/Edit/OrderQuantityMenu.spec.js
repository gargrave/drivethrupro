import React from 'react'
import { shallow } from 'enzyme'

import OrderQuantityMenu from '../../../../components/Orders/Edit/OrderQuantityMenu'

describe('OrderQuantityMenu', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      quantity: 2,
      handleQuantityChange: jest.fn()
    }
    component = shallow(<OrderQuantityMenu {...props} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('pre-selects the option passed into props', () => {
    const select = component.find('.order-quantity-menu')
    const expected = props.quantity
    const actual = select.props().value
    expect(actual).toEqual(expected)
  })

  test('renders a range of 20 if no "maxRange" prop is supplied', () => {
    const actual = component.find('.order-quantity-menu option').length
    const expected = 20
    expect(actual).toEqual(expected)
  })

  test('renders a specific range if a "maxRange" prop is supplied', () => {
    const maxRange = 5
    // re-mount the component with updated props for this test
    props.maxRange = maxRange
    component = shallow(<OrderQuantityMenu {...props} />)
    const actual = component.find('.order-quantity-menu option').length
    expect(actual).toEqual(maxRange)
  })

  test('calls the "change" callback when an option is selected', () => {
    expect(props.handleQuantityChange.mock.calls.length).toEqual(0)
    component.find('.order-quantity-menu').simulate('change')
    expect(props.handleQuantityChange.mock.calls.length).toEqual(1)
  })
})
