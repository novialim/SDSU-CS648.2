import React from 'react'
import { Link } from 'react-router-dom'

const ProductRow = ({ index, product, deleteProduct }) => {
  return (
    <tr key={index} style={{ textAlign: 'center' }}>
      <td className="table-col">{product.Name}</td>
      <td className="table-col">${product.Price}</td>
      <td className="table-col">{product.Category}</td>
      <td className="table-col">
        <Link to={`/view/${product.id}`}>View</Link>
      </td>
      <td>
        <Link to={`/edit/${product.id}`}>Edit</Link>
        {' | '}
        <button
          type="button"
          onClick={() => {
            deleteProduct(product.id)
          }}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default ProductRow
