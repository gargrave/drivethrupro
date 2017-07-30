import React from 'react'
import { shallow } from 'enzyme'

import Titlebar from '../../../components/Common/Titlebar'

describe('Titlebar', () => {
  let props
  let component

  beforeEach(() => {
    props = {
      title: 'AppTitle',
      titleLink: '/link'
    }

    component = shallow(<Titlebar {...props} />)
  })

  test('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })

  test('should render title as a link when a link is provided', () => {
    const linkedTitleCount = component.find('.title-linked').length
    const unlinkedTitleCount = component.find('.title-unlinked').length
    expect(linkedTitleCount).toEqual(1)
    expect(unlinkedTitleCount).toEqual(0)
  })

  test('should render title as unlinked text when no link is provided', () => {
    delete props.titleLink
    component = shallow(<Titlebar {...props} />)
    const linkedTitleCount = component.find('.title-linked').length
    const unlinkedTitleCount = component.find('.title-unlinked').length
    expect(linkedTitleCount).toEqual(0)
    expect(unlinkedTitleCount).toEqual(1)
  })
})
