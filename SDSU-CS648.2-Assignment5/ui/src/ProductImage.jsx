import React from 'react'

import graphQLFetch from './graphQLFetch.js'

class ProductImage extends React.Component {
  constructor() {
    super()
    this.state = { product: {} }
  }

  componentDidMount() {
    this.loadData()
  }

  async loadData() {
    const query = `query Product($id: Int!) {
      Product(id: $id) {
        id Category Name Price Image
      }
    }`

    const {
      match: {
        params: { id },
      },
    } = this.props

    const data = await graphQLFetch(query, { id })
    if (data) {
      this.setState({ product: data.Product })
    } else this.setState({ product: null })
  }

  render() {
    const { product } = this.state
    return <img style={{maxWidth:'100vw'}} src={product.Image} alt={product.Name} />
  }
}

export default ProductImage
