import React from 'react'
import ProductRow from './ProductRow.jsx'
import { Label } from 'react-bootstrap'

const ProductTable = ({ products, deleteProduct }) => {
  return (
    <div>
      <p>Showing all available products</p>
      <hr />
      <table>
        <thead>
          <tr>
            <th className="table-col">Product Name</th>
            <th className="table-col">Price</th>
            <th className="table-col">Category</th>
            <th className="table-col">Image</th>
            <th className="table-col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return <ProductRow product={product} index={index} key={product.id} deleteProduct={deleteProduct} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable