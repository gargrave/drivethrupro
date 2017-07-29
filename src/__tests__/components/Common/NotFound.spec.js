import React from 'react'
import { shallow } from 'enzyme'

import NotFound from '../../../components/Common/NotFound'

test('NotFound renders correctly', () => {
  const component = shallow(<NotFound />)
  expect(component).toMatchSnapshot()
})
