import React from 'react'
import { shallow } from 'enzyme'

import ManagerAlertNotice from '../../../../components/Orders/List/ManagerAlertNotice'
import OpenOrdersDisplay from '../../../../components/Orders/List/OpenOrdersDisplay'
import OrderDetailRow from '../../../../components/Orders/List/OrderDetailRow'

import mockOrders from '../../../../data/mock-orders'

const orders = mockOrders.orders

describe('OpenOrdersDisplay', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      orders,
      handleCompleteOrderClick: jest.fn(),
      handleEditOrderClick: jest.fn(),
      handleCancelOrderClick: jest.fn()
    }
    component = shallow(<OpenOrdersDisplay {...props} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('display render the correct number of item rows', () => {
    const actual = component.find(OrderDetailRow).length
    const expected = orders.length
    expect(actual).toEqual(expected)
  })

  test('should display a ManagerAlertNotice when order count is greater than 4', () => {
    expect(component.find(ManagerAlertNotice).length).toEqual(1)
  })

  test('should not display a ManagerAlertNotice when order count is less than 4', () => {
    props.orders.length = 2
    // re-mount the component with the truncated list of orders
    component = shallow(<OpenOrdersDisplay {...props} />)
    expect(component.find(ManagerAlertNotice).length).toEqual(0)
  })
})
