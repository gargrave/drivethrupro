let nextId = 0

export default [
  {
    id: nextId++,
    name: 'Hamburger',
    sizes: { name: 'regular', price: 99 }
  },
  {
    id: nextId++,
    name: 'French Fries',
    sizes: [{ name: 'Small', price: 49 }, { name: 'Medium', price: 69 }, { name: 'Large', price: 89 }]
  },
  {
    id: nextId++,
    name: 'Fountrain Drink',
    sizes: [
      { name: 'Small', price: 59 },
      { name: 'Medium', price: 79 },
      { name: 'Large', price: 99 },
      { name: 'Obscene', price: 139 }
    ]
  }
]
