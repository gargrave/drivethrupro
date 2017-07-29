import React from 'react'
import { shallow } from 'enzyme'

import OrderSizeMenu from '../../../../components/Orders/Edit/OrderSizeMenu'

const sizes = [{ name: 'Small', price: 49 }, { name: 'Medium', price: 69 }, { name: 'Large', price: 89 }]

describe('OrderSizeMenu', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      sizeIdx: 1,
      availableSizes: sizes,
      handleSizeChange: jest.fn()
    }
    component = shallow(<OrderSizeMenu {...props} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('pre-selects the option passed into props', () => {
    const select = component.find('.order-size-menu')
    const expected = props.sizeIdx
    const actual = select.props().value
    expect(actual).toEqual(expected)
  })

  test('renders the correct number of options', () => {
    const actual = component.find('.order-size-menu option').length
    const expected = sizes.length
    expect(actual).toEqual(expected)
  })

  test('calls the "change" callback when an option is selected', () => {
    expect(props.handleSizeChange.mock.calls.length).toEqual(0)
    component.find('.order-size-menu').simulate('change')
    expect(props.handleSizeChange.mock.calls.length).toEqual(1)
  })
})
