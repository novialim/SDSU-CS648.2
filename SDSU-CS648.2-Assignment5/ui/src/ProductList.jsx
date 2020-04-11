import React from 'react'

import ProductTable from './ProductTable.jsx'
import ProductAdd from './ProductAdd.jsx'
import graphQLFetch from './graphQLFetch.js'

class ProductList extends React.Component {
  constructor() {
    super()
    this.state = { products: [] }
    this.createProduct = this.createProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    const query = `query {
      productList {
        id Category Name Price Image
      }
    }`

    const data = await graphQLFetch(query)
    if (data) {
      this.setState({ products: data.productList })
    }
  }

  async createProduct(product) {
    const query = `mutation productAdd($product: ProductInputs!) {
      productAdd(product: $product) {
        id 
      }
    }`

    const data = await graphQLFetch(query, { product })
    if (data) {
      this.loadData()
    }
  }

  async deleteProduct(id) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`

    const data = await graphQLFetch(query, { id })

    if (!data.productDelete) {
      alert('Product deleted unsuccessfully') // eslint-disable-line no-alert
      return false
    }
    alert('Product deleted successfully') // eslint-disable-line no-alert
    this.loadData()
    return true
  }

  render() {
    const { products } = this.state
    return (
      <div style={{ color: 'white' }}>
        <ProductTable products={products} deleteProduct={this.deleteProduct} />
        <ProductAdd createProduct={this.createProduct} />
      </div>
    )
  }
}

export default ProductList
