import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap'

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
    form.price.value = ''
    createProduct(product)
  }

  render() {
    return (
      <div style={{paddingTop: 20}}>
        <h3>Add a new product to Inventory</h3>
        <hr />
        <Form name="productAdd" onSubmit={this.handleSubmit}>
          <div className="formContainer">
            <div className="formCol">
              <FormGroup controlId="category" name="category">
                <ControlLabel>Category</ControlLabel>
                <FormControl componentClass="select" placeholder="select" name="category">
                  <option value=""></option>
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Jackets"> Jackets</option>
                  <option value="Sweaters">Sweaters </option>
                  <option value="Accessories">Accessories</option>
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Product Name</ControlLabel>
                <FormControl type="text" name="name" />
              </FormGroup>
            </div>
            <div className="formCol">
              <FormGroup>
                <ControlLabel>Price Per Unit</ControlLabel>
                <InputGroup>
                  <InputGroup.Addon>$</InputGroup.Addon>
                  <FormControl type="text" name="price" onChange={this.handlePriceChange} />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Image URL</ControlLabel>
                <FormControl type="text" name="imageurl" />
              </FormGroup>
            </div>
          </div>
          <Button bsStyle="primary" as="input" type="submit" value="Submit">
            Add Product
          </Button>
        </Form>
      </div>
    )
  }
}

export default ProductAdd

ProductAdd.propTypes = {
  createProduct: PropTypes.func.isRequired,
}
