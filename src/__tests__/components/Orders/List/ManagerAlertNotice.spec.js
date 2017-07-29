import React from 'react'
import { shallow } from 'enzyme'

import ManagerAlertNotice from '../../../../components/Orders/List/ManagerAlertNotice'

test('ManagerAlertNotice renders correctly', () => {
  const component = shallow(<ManagerAlertNotice />)
  expect(component).toMatchSnapshot()
})

test('ManagerAlertNotice displays the current order count', () => {
  const orderCount = 7
  const component = shallow(<ManagerAlertNotice orderCount={orderCount} />)
  expect(component.text().indexOf('7 orders')).not.toEqual(-1)
})

test('ManagerAlertNotice displays default text when no order count is provided', () => {
  const component = shallow(<ManagerAlertNotice />)
  expect(component.text().indexOf('Too many')).not.toEqual(-1)
})
