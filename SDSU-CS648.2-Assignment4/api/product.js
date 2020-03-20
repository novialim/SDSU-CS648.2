const { getDb, getNextSequence } = require('./db.js')

async function productList() {
  const db = getDb()
  const products = await db
    .collection('products')
    .find({})
    .toArray()
  return products
}

async function productAdd(_, { product }) {
  const db = getDb()
  const newProduct = { ...product }
  newProduct.id = await getNextSequence('products')
  const result = await db.collection('products').insertOne(newProduct)
  const savedProduct = await db.collection('products').findOne({ _id: result.insertedId })
  return savedProduct
}

module.exports = { productList, productAdd }
