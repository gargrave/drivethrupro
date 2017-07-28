import { displayAsDollars } from '../../utils/utils'

describe('displayAsDollars()', () => {
  test('should display 0 as "$0.00"', () => {
    let val = 0
    const actual = displayAsDollars(val)
    const expected = '$0.00'
    expect(actual).toEqual(expected)
  })

  test('should display 123 as "$1.23"', () => {
    let val = 123
    const actual = displayAsDollars(val)
    const expected = '$1.23'
    expect(actual).toEqual(expected)
  })

  test('should display -123 as "-$1.23"', () => {
    let val = -123
    const actual = displayAsDollars(val)
    const expected = '-$1.23'
    expect(actual).toEqual(expected)
  })

  test('should throw TypeError is value is not an Integer"', () => {
    expect(() => {
      displayAsDollars(1.23)
    }).toThrow()

    expect(() => {
      displayAsDollars('123')
    }).toThrow()
  })
})
