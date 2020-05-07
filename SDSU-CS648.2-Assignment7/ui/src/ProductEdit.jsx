import React from 'react'
import { Link } from 'react-router-dom'
import graphQLFetch from './graphQLFetch'
import NumInput from './NumInput.jsx'
import TextInput from './TextInput.jsx'
import { Button, Form, FormGroup, ControlLabel, FormControl, InputGroup } from 'react-bootstrap'

class ProductEdit extends React.Component {
  constructor() {
    super()
    this.state = {
      product: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.loadData()
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { id: prevId },
      },
    } = prevProps
    const {
      match: {
        params: { id },
      },
    } = this.props
    if (id !== prevId) {
      this.loadData()
    }
  }

  onChange = (event, naturalValue) => {
    console.log('event.target name', event.target.name)
    const { name, value: textValue } = event.target
    const value = naturalValue === undefined ? textValue : naturalValue
    this.setState((prevState) => ({
      product: { ...prevState.product, [name]: value },
    }))
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { product } = this.state

    const query = `mutation productUpdate(
      $id: Int!
      $modify: ProductUpdateInputs!
    ) {
      productUpdate(
        id: $id
        modify: $modify
      ) {
        id Category Name Price Image
      }
    }`
    const { id, ...modify } = product
    const data = await graphQLFetch(query, { modify, id })

    if (data) {
      this.setState({ product: data.productUpdate })
      alert('Update Product Successfully') // eslint-disable-line no-alert
    }
  }

  async loadData() {
    const query = `query Product($id: Int!) {
      Product(id: $id) {
        id Name Price Category Image
      }
    }`
    const {
      match: {
        params: { id },
      },
    } = this.props
    const data = await graphQLFetch(query, { id })
    this.setState({ product: data.Product })
  }

  render() {
    const {
      product: { Name, Price, Image, id, Category },
    } = this.state
    return id ? (
      <div style={{ color: 'white' }}>
        <form onSubmit={this.handleSubmit}>
          <h1>{`Editing Product ID: ${id}`}</h1>
          <table>
            <tbody>
              <tr>
                <FormGroup>
                  <ControlLabel>Name</ControlLabel>
                  <FormControl type="text" name="Name" value={Name} onChange={this.onChange} key={id} />
                </FormGroup>
              </tr>
              <tr>
                <FormGroup controlId="form-category">
                  <ControlLabel>Category</ControlLabel>
                  <FormControl componentClass="select" value={Category} name="Category" onChange={this.onChange}>
                    <option value="Shirts">Shirts</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Jackets"> Jackets</option>
                    <option value="Sweaters">Sweaters </option>
                    <option value="Accessories">Accessories</option>
                  </FormControl>
                </FormGroup>
              </tr>
              <tr>
                <FormGroup>
                  <ControlLabel>Price</ControlLabel>
                  <FormControl name="Price" value={Price} onChange={this.onChange} key={id} />
                </FormGroup>
              </tr>
              <tr>
                <FormGroup>
                  <ControlLabel>Image:</ControlLabel>
                  <FormControl name="Image" value={Image} onChange={this.onChange} key={id} />
                </FormGroup>
              </tr>
              <tr>
                <tr>
                  <Button bsStyle="primary" as="input" type="submit" value="Submit">
                    Submit
                  </Button>
                </tr>
                <td />
              </tr>
            </tbody>
          </table>
          <div style={{padding: '10px 0'}}>
            <Link to={`/edit/${id - 1}`}>Prev</Link>
            {' | '}
            <Link to={`/edit/${id + 1}`}>Next</Link>
          </div>
          <div style={{padding: '10px 0'}}>
            <Link to={`/`}>Back to Home</Link>
          </div>
        </form>
      </div>
    ) : (
      <h1>Loading Data...</h1>
    )
  }
}

export default ProductEdit
