import reducers from '../../../store/reducers'

test('CREATE_ORDER with no pre-existing orders', () => {
  let state
  state = reducers(
    { orders: [] },
    {
      type: 'CREATE_ORDER',
      payload: {
        id: 1,
        items: [{ id: 1, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
        totalItems: 1,
        totalPrice: 99
      }
    }
  )
  expect(state).toEqual({
    orders: [
      {
        id: 1,
        items: [{ id: 1, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
        totalItems: 1,
        totalPrice: 99
      }
    ]
  })
})

test('CREATE_ORDER with multiple pre-existing orders', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 5,
          items: [{ id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        },
        {
          id: 9,
          items: [{ id: 6, name: 'French Fries (Small)', quantity: 1, pricePerUnit: 49, totalPrice: 49 }],
          totalItems: 1,
          totalPrice: 49
        }
      ]
    },
    {
      type: 'CREATE_ORDER',
      payload: {
        id: 11,
        items: [{ id: 7, name: 'Fountrain Drink (Small)', quantity: 1, pricePerUnit: 59, totalPrice: 59 }],
        totalItems: 1,
        totalPrice: 59
      }
    }
  )
  expect(state).toEqual({
    orders: [
      {
        id: 5,
        items: [{ id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
        totalItems: 1,
        totalPrice: 99
      },
      {
        id: 9,
        items: [{ id: 6, name: 'French Fries (Small)', quantity: 1, pricePerUnit: 49, totalPrice: 49 }],
        totalItems: 1,
        totalPrice: 49
      },
      {
        id: 11,
        items: [{ id: 7, name: 'Fountrain Drink (Small)', quantity: 1, pricePerUnit: 59, totalPrice: 59 }],
        totalItems: 1,
        totalPrice: 59
      }
    ]
  })
})

test('UPDATE_ORDER', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 1,
          items: [{ id: 1, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        }
      ]
    },
    {
      type: 'UPDATE_ORDER',
      payload: {
        id: 1,
        items: [
          { id: 1, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 2, name: 'French Fries (Small)', quantity: 1, pricePerUnit: 49, totalPrice: 49 }
        ],
        totalItems: 2,
        totalPrice: 148
      }
    }
  )
  expect(state).toEqual({
    orders: [
      {
        id: 1,
        items: [
          { id: 1, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 2, name: 'French Fries (Small)', quantity: 1, pricePerUnit: 49, totalPrice: 49 }
        ],
        totalItems: 2,
        totalPrice: 148
      }
    ]
  })
})

test('COMPLETE_ORDER with only one order in store', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 3,
          items: [{ id: 2, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        }
      ]
    },
    { type: 'COMPLETE_ORDER', payload: { id: 3 } }
  )
  expect(state).toEqual({ orders: [] })
})

test('COMPLETE_ORDER with multiple orders', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 5,
          items: [{ id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        },
        {
          id: 9,
          items: [{ id: 6, name: 'French Fries (Small)', quantity: 1, pricePerUnit: 49, totalPrice: 49 }],
          totalItems: 1,
          totalPrice: 49
        },
        {
          id: 11,
          items: [{ id: 7, name: 'Fountrain Drink (Small)', quantity: 1, pricePerUnit: 59, totalPrice: 59 }],
          totalItems: 1,
          totalPrice: 59
        }
      ]
    },
    { type: 'COMPLETE_ORDER', payload: { id: 9 } }
  )
  expect(state).toEqual({
    orders: [
      {
        id: 5,
        items: [{ id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
        totalItems: 1,
        totalPrice: 99
      },
      {
        id: 11,
        items: [{ id: 7, name: 'Fountrain Drink (Small)', quantity: 1, pricePerUnit: 59, totalPrice: 59 }],
        totalItems: 1,
        totalPrice: 59
      }
    ]
  })
})

test('CANCEL_ORDER with only one order in store', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 1,
          items: [{ id: 1, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        }
      ]
    },
    { type: 'CANCEL_ORDER', payload: { id: 1 } }
  )
  expect(state).toEqual({ orders: [] })
})

test('CANCEL_ORDER from multiple orders', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 5,
          items: [{ id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        },
        {
          id: 7,
          items: [{ id: 5, name: 'Cheeseburger (Regular)', quantity: 1, pricePerUnit: 119, totalPrice: 119 }],
          totalItems: 1,
          totalPrice: 119
        },
        {
          id: 9,
          items: [{ id: 6, name: 'French Fries (Small)', quantity: 1, pricePerUnit: 49, totalPrice: 49 }],
          totalItems: 1,
          totalPrice: 49
        }
      ]
    },
    { type: 'CANCEL_ORDER', payload: { id: 7 } }
  )
  expect(state).toEqual({
    orders: [
      {
        id: 5,
        items: [{ id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
        totalItems: 1,
        totalPrice: 99
      },
      {
        id: 9,
        items: [{ id: 6, name: 'French Fries (Small)', quantity: 1, pricePerUnit: 49, totalPrice: 49 }],
        totalItems: 1,
        totalPrice: 49
      }
    ]
  })
})
