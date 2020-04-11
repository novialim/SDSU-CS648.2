import React from 'react'
import PropTypes from 'prop-types'

class ProductAdd extends React.Component {
  constructor() {
    super()
    this.state = { price: '$' }
  }

  handlePriceChange = () => {
    this.setState({ price: document.forms.productAdd.price.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = document.forms.productAdd

    let priceNum = form.price.value.replace(/\$/g, '')
    const product = {
      Name: form.name.value,
      Price: priceNum,
      Category: form.category.value,
      Image: form.imageurl.value,
    }

    const { createProduct } = this.props
    this.setState({ price: '$' })
    form.name.value = ''
    form.category.value = ''
    form.imageurl.value = ''
    createProduct(product)
  }

  render() {
    return (
      <div>
        <p>Add a new product to Inventory</p>
        <hr />
        <form name="productAdd" onSubmit={this.handleSubmit}>
          <div className="formContainer">
            <div className="formCol">
              Category <br />
              <select name="category">
                <option value=""></option>
                <option value="Shirts">Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Jackets"> Jackets</option>
                <option value="Sweaters">Sweaters </option>
                <option value="Accessories">Accessories</option>
              </select>
              <br />
              Product Name <br />
              <input type="text" name="name" />
              <br />
            </div>
            <div className="formCol">
              Price Per Unit <br />
              <input type="text" name="price" value={this.state.price} onChange={this.handlePriceChange} />
              <br />
              Image URL <br />
              <input type="text" name="imageurl" />
              <br />
            </div>
          </div>
          <input type="submit" value="Add Product" className="submitButton" />
        </form>
      </div>
    )
  }
}

export default ProductAdd

ProductAdd.propTypes = {
  createProduct: PropTypes.func.isRequired,
}
