import React from 'react'
import { shallow } from 'enzyme'

import OrderProductMenu from '../../../../components/Orders/Edit/OrderProductMenu'

import menu from '../../../../data/menu-items'

describe('OrderProductMenu', () => {
  let props

  beforeEach(() => {
    props = {
      menu,
      selectedMenuItem: {
        id: 1
      },
      handleItemChange: jest.fn()
    }
  })

  test('renders correctly', () => {
    const component = shallow(<OrderProductMenu {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('pre-selects the option passed into props', () => {
    const component = shallow(<OrderProductMenu {...props} />)
    const select = component.find('.order-product-select')
    const expected = props.selectedMenuItem.id
    const actual = select.props().value
    expect(actual).toEqual(expected)
  })

  test('renders an <option> for each menu item', () => {
    const component = shallow(<OrderProductMenu {...props} />)
    const expected = menu.length
    const actual = component.find('.order-product-select-option').length
    expect(actual).toEqual(expected)
  })

  test('calls the "change" callback when an option is selected', () => {
    const component = shallow(<OrderProductMenu {...props} />)
    expect(props.handleItemChange.mock.calls.length).toEqual(0)
    component.find('.order-product-select').simulate('change')
    expect(props.handleItemChange.mock.calls.length).toEqual(1)
  })
})
