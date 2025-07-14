const a = 'toys animal'
const b = 'toys animal'
console.log(a === b)


const categoriesToFilter = ['Beverage'];

const filteredProducts = products.filter(product =>
  product.categories.some(cat =>
    categoriesToFilter.includes(cat)
  )
);

console.log(filteredProducts);

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}