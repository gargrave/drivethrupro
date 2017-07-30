import React from 'react'
import { shallow } from 'enzyme'

import { displayAsDollars } from '../../../../utils/utils'
import CurrentItemTotal from '../../../../components/Orders/Edit/CurrentItemTotal'

import menu from '../../../../data/menu-items'

describe('CurrentItemTotal', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      item: menu[0],
      sizeIdx: 0,
      quantity: 2
    }

    component = shallow(<CurrentItemTotal {...props} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('displays the correct quantity', () => {
    const text = component.find('.item-total-display p').text()
    expect(text.indexOf(`${props.quantity}x`)).not.toEqual(-1)
  })

  test('displays the correct price per unit', () => {
    const text = component.find('.item-total-display p').text()
    const expected = displayAsDollars(props.item.sizes[props.sizeIdx].price)
    expect(text.indexOf(`${expected}`)).not.toEqual(-1)
  })

  test('displays the correct total price (ppu * quantity)', () => {
    const text = component.find('.item-total-display p').text()
    const total = props.item.sizes[props.sizeIdx].price * props.quantity
    const expected = displayAsDollars(total)
    expect(text.indexOf(`${expected}`)).not.toEqual(-1)
  })
})
