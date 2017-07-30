import React from 'react'
import { shallow } from 'enzyme'

import { Unwrapped } from '../../../components/Common/HomePage'

describe('Home (without Redux)', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      ordersCompleted: 0,
      ordersCancelled: 0,
      revenueEarned: 0,
      revenueLost: 0
    }
    component = shallow(<Unwrapped {...props} />)
  })

  test('Home renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
