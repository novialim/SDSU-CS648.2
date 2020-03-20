/* global db print */
/* eslint no-restricted-globals: "off" */
/* eslint linebreak-style: ["error", "windows"] */

db.products.remove({})

const productsDB = [
  {
    id: 1,
    Category: 'Shirts',
    Price: 20,
    Name: 'The Neon Teeshirt',
    Image: 'https://img.ltwebstatic.com/images2_pi/2019/06/05/1559719007738600149_thumbnail_900x1199.webp'
  },
  {
    id: 2,
    Category: 'Jeans',
    Price: 89,
    Name: 'Levis',
    Image: 'https://cdn.shopify.com/s/files/1/0026/8464/9531/products/19_H1_18882-0179_Front_199_UR_1200x1200.jpg'
  },
  {
    id: 3,
    Category: 'Jeans',
    Price: 189,
    Name: 'Gap',
    Image: 'https://cdn.shopify.com/s/files/1/0026/8464/9531/products/19_H1_18882-0179_Front_199_UR_1200x1200.jpg'
  }
]

db.products.insertMany(productsDB)
const count = db.products.count()
print('Inserted', count, 'products')

db.counters.remove({ _id: 'products' })
db.counters.insert({ _id: 'products', current: count })

db.products.createIndex({ id: 1 }, { unique: true })
db.products.createIndex({ Name: 1 })
db.products.createIndex({ Category: 1 })
db.products.createIndex({ Price: 1 })
