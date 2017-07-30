/*
A set of mock order data to use when needed to pre-populate the store/database/etc.
*/

export default {
  orders: [
    {
      id: 99991,
      items: [
        { id: 1, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
        { id: 2, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
        { id: 3, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
        { id: 4, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }
      ],
      totalItems: 4,
      totalPrice: 396
    },
    {
      id: 99993,
      items: [
        { id: 5, name: 'Hamburger (Regular)', quantity: 1, pricePerUnit: 99, totalPrice: 99 },
        { id: 6, name: 'French Fries (Large)', quantity: 1, pricePerUnit: 89, totalPrice: 89 },
        { id: 7, name: 'Fountrain Drink (Large)', quantity: 1, pricePerUnit: 99, totalPrice: 99 }
      ],
      totalItems: 3,
      totalPrice: 287
    },
    {
      id: 99995,
      items: [
        { id: 8, name: 'Double Cheeseburger (Regular)', quantity: 1, pricePerUnit: 189, totalPrice: 189 },
        { id: 9, name: 'French Fries (Large)', quantity: 1, pricePerUnit: 89, totalPrice: 89 },
        { id: 10, name: 'Fountrain Drink (Obscene)', quantity: 2, pricePerUnit: 139, totalPrice: 278 }
      ],
      totalItems: 4,
      totalPrice: 556
    },
    {
      id: 99997,
      items: [
        { id: 11, name: 'Currrly Fries (Small)', quantity: 5, pricePerUnit: 79, totalPrice: 395 },
        { id: 12, name: 'Milkshake (Medium)', quantity: 5, pricePerUnit: 149, totalPrice: 745 }
      ],
      totalItems: 10,
      totalPrice: 1140
    },
    {
      id: 99999,
      items: [
        { id: 13, name: 'Double Cheeseburger (Regular)', quantity: 2, pricePerUnit: 189, totalPrice: 378 },
        { id: 14, name: 'Bottled Water (Regular)', quantity: 2, pricePerUnit: 129, totalPrice: 258 }
      ],
      totalItems: 4,
      totalPrice: 636
    }
  ]
}
