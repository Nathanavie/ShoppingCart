import React from 'react';
import { moneyFormat } from '../Utils/utils'

const Products = props => {
  let productList = props.productsList;

  const products = productList.map((product, i) => {
    let dealPrice = product.dealPrice;

    {dealPrice > 99 ? dealPrice = moneyFormat.format(product.dealPrice / 100) : dealPrice = `${dealPrice}p`};


      return (
        <div key={i}>
          <p>Product Name: {product.name}</p>
          <p>Price: {product.price}p</p>
          {product.deal ? <p>Buy {product.NoOfItems} for {dealPrice}</p> : ''}
          {product.name === 'A' ? <input type="number" name="noOfA" value={props.A} onChange={props.handleChange} /> :
           product.name === 'B' ? <input type="number" name="noOfB" value={props.B} onChange={props.handleChange} /> :
           product.name === 'C' ? <input type="number" name="noOfC" value={props.C} onChange={props.handleChange} /> :
           product.name === 'D' ? <input type="number" name="noOfD" value={props.D} onChange={props.handleChange} /> : ''}
        </div>
      )
  })

  return (
    <>
      {products}
    </>
  )
}
export default Products;
