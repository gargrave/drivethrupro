import React from 'react'
import { shallow } from 'enzyme'

import Home from '../../../components/Common/Home'

test('Home renders correctly', () => {
  const component = shallow(<Home />)
  expect(component).toMatchSnapshot()
})
