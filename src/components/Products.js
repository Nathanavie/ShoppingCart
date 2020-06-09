import React from 'react';
import { moneyFormat } from '../Utils/utils'

const Products = props => {
  let productList = props.productsList;

  const products = productList.map((product, i) => {
    let dealPrice = product.dealPrice;

    {dealPrice > 99 ? dealPrice = moneyFormat.format(product.dealPrice / 100) : dealPrice = `${dealPrice}p`};


      return (
        <div className="product" key={i}>
          <div className="productTitle">
            <h4>{product.name}</h4>
          </div>
          <div className="productDetails">
            <p className="productPrice">Price <strong>{product.price}p</strong></p>
            {product.deal ? <p className="productDeal">Buy <strong>{product.NoOfItems}</strong> for <strong>{dealPrice}</strong></p> : ''}
            {product.name === 'A' ? <><p className="productQuantity">Quantity</p><input className="productInput" type="number" name="noOfA" value={props.A} onChange={props.handleChange} /> </>:
             product.name === 'B' ? <><p className="productQuantity">Quantity</p><input className="productInput" type="number" name="noOfB" value={props.B} onChange={props.handleChange} /> </>:
             product.name === 'C' ? <><p className="productQuantity">Quantity</p><input className="productInput" type="number" name="noOfC" value={props.C} onChange={props.handleChange} /> </>:
             product.name === 'D' ? <><p className="productQuantity">Quantity</p><input className="productInput" type="number" name="noOfD" value={props.D} onChange={props.handleChange} /> </>: ''}
             <button className="updateCart" onClick={props.updateCart}>Add To Cart</button>
           </div>
        </div>
      )
  })

  return (
    <div className="productContainer">
      {products}
    </div>
  )
}
export default Products;
