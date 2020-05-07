import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Glyphicon } from 'react-bootstrap'

const ProductRow = ({ index, product, deleteProduct }) => {
  return (
    <tr key={index}>
      <td className="table-col">{product.Name}</td>
      <td className="table-col">${product.Price}</td>
      <td className="table-col">{product.Category}</td>
      <td className="table-col">
        <Link to={`/view/${product.id}`}>View</Link>
      </td>
      <td>
        <Link to={`/edit/${product.id}`}>Edit</Link>
        {' | '}
        <Button bsStyle="primary" type="button" onClick={() => {
            deleteProduct(product.id)
          }}>
          Delete
          <Glyphicon style={{paddingLeft: 10}} glyph="remove" />
        </Button>
      </td>
    </tr>
  )
}

export default ProductRow
