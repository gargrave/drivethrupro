import reducers from '../../../store/reducers'

test('CREATE_ORDER', () => {
  let state
  state = reducers(
    { orders: [], totals: { ordersCompleted: 0, ordersCancelled: 0, revenueEarned: 0, revenueLost: 0 } },
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
    ],
    totals: { ordersCompleted: 0, ordersCancelled: 0, revenueEarned: 0, revenueLost: 0 }
  })
})

test('CREATE_ORDER', () => {
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
      ],
      totals: { ordersCompleted: 0, ordersCancelled: 0, revenueEarned: 0, revenueLost: 0 }
    },
    {
      type: 'CREATE_ORDER',
      payload: {
        id: 3,
        items: [
          { id: 2, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 3, name: 'Double Cheeseburger (Regular)', quantity: 1, pricePerUnit: 189, totalPrice: 189 }
        ],
        totalItems: 2,
        totalPrice: 288
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
      },
      {
        id: 3,
        items: [
          { id: 2, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 3, name: 'Double Cheeseburger (Regular)', quantity: 1, pricePerUnit: 189, totalPrice: 189 }
        ],
        totalItems: 2,
        totalPrice: 288
      }
    ],
    totals: { ordersCompleted: 0, ordersCancelled: 0, revenueEarned: 0, revenueLost: 0 }
  })
})

test('CANCEL_ORDER', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 1,
          items: [{ id: 1, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        },
        {
          id: 3,
          items: [
            { id: 2, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
            { id: 3, name: 'Double Cheeseburger (Regular)', quantity: 1, pricePerUnit: 189, totalPrice: 189 }
          ],
          totalItems: 2,
          totalPrice: 288
        }
      ],
      totals: { ordersCompleted: 0, ordersCancelled: 0, revenueEarned: 0, revenueLost: 0 }
    },
    {
      type: 'CANCEL_ORDER',
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
        id: 3,
        items: [
          { id: 2, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 3, name: 'Double Cheeseburger (Regular)', quantity: 1, pricePerUnit: 189, totalPrice: 189 }
        ],
        totalItems: 2,
        totalPrice: 288
      }
    ],
    totals: { ordersCompleted: 0, ordersCancelled: 1, revenueEarned: 0, revenueLost: 99 }
  })
})

test('CANCEL_ORDER', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 3,
          items: [
            { id: 2, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
            { id: 3, name: 'Double Cheeseburger (Regular)', quantity: 1, pricePerUnit: 189, totalPrice: 189 }
          ],
          totalItems: 2,
          totalPrice: 288
        }
      ],
      totals: { ordersCompleted: 0, ordersCancelled: 1, revenueEarned: 0, revenueLost: 99 }
    },
    {
      type: 'CANCEL_ORDER',
      payload: {
        id: 3,
        items: [
          { id: 2, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 3, name: 'Double Cheeseburger (Regular)', quantity: 1, pricePerUnit: 189, totalPrice: 189 }
        ],
        totalItems: 2,
        totalPrice: 288
      }
    }
  )
  expect(state).toEqual({
    orders: [],
    totals: { ordersCompleted: 0, ordersCancelled: 2, revenueEarned: 0, revenueLost: 387 }
  })
})

test('UPDATE_ORDER', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 5,
          items: [{ id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        }
      ],
      totals: { ordersCompleted: 0, ordersCancelled: 2, revenueEarned: 0, revenueLost: 387 }
    },
    {
      type: 'UPDATE_ORDER',
      payload: {
        id: 5,
        items: [
          { id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 5, name: 'Cheeseburger (Regular)', quantity: 1, pricePerUnit: 119, totalPrice: 119 }
        ],
        totalItems: 2,
        totalPrice: 218
      }
    }
  )
  expect(state).toEqual({
    orders: [
      {
        id: 5,
        items: [
          { id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 5, name: 'Cheeseburger (Regular)', quantity: 1, pricePerUnit: 119, totalPrice: 119 }
        ],
        totalItems: 2,
        totalPrice: 218
      }
    ],
    totals: { ordersCompleted: 0, ordersCancelled: 2, revenueEarned: 0, revenueLost: 387 }
  })
})

test('COMPLETE_ORDER', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 5,
          items: [
            { id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
            { id: 5, name: 'Cheeseburger (Regular)', quantity: 1, pricePerUnit: 119, totalPrice: 119 }
          ],
          totalItems: 2,
          totalPrice: 218
        },
        {
          id: 7,
          items: [{ id: 6, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        }
      ],
      totals: { ordersCompleted: 0, ordersCancelled: 2, revenueEarned: 0, revenueLost: 387 }
    },
    {
      type: 'COMPLETE_ORDER',
      payload: {
        id: 5,
        items: [
          { id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
          { id: 5, name: 'Cheeseburger (Regular)', quantity: 1, pricePerUnit: 119, totalPrice: 119 }
        ],
        totalItems: 2,
        totalPrice: 218
      }
    }
  )
  expect(state).toEqual({
    orders: [
      {
        id: 7,
        items: [{ id: 6, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
        totalItems: 1,
        totalPrice: 99
      }
    ],
    totals: { ordersCompleted: 1, ordersCancelled: 2, revenueEarned: 218, revenueLost: 387 }
  })
})

test('COMPLETE_ORDER', () => {
  let state
  state = reducers(
    {
      orders: [
        {
          id: 7,
          items: [{ id: 6, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
          totalItems: 1,
          totalPrice: 99
        }
      ],
      totals: { ordersCompleted: 1, ordersCancelled: 2, revenueEarned: 218, revenueLost: 387 }
    },
    {
      type: 'COMPLETE_ORDER',
      payload: {
        id: 7,
        items: [{ id: 6, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }],
        totalItems: 1,
        totalPrice: 99
      }
    }
  )
  expect(state).toEqual({
    orders: [],
    totals: { ordersCompleted: 2, ordersCancelled: 2, revenueEarned: 317, revenueLost: 387 }
  })
})
