import React from 'react';
import { moneyFormat } from '../Utils/utils'

const Cart = props => {
  let product = props;
  let priceA, priceB, priceC, priceD, totalPrice = '';

  {product.A > 99 ? priceA = moneyFormat.format(product.A / 100) : priceA = `${product.A}p`}
  {product.B > 99 ? priceB = moneyFormat.format(product.B / 100) : priceB = `${product.B}p`}
  {product.C > 99 ? priceC = moneyFormat.format(product.C / 100) : priceC = `${product.C}p`}
  {product.D > 99 ? priceD = moneyFormat.format(product.D / 100) : priceD = `${product.D}p`}
  {product.totalPrice > 99 ? totalPrice = moneyFormat.format(product.totalPrice / 100) : totalPrice = `${product.totalPrice}p`}

  return (
    <div>
    <h2>Your Cart</h2>
    <p>Your items</p>
    {product.noA > 0 ? <div><p>Product A: {product.noA} cost: {priceA}</p></div> : ''}
    {product.noB > 0 ? <div><p>Product B: {product.noB} cost: {priceB}</p></div> : ''}
    {product.noC > 0 ? <div><p>Product C: {product.noC} cost: {priceC}</p></div> : ''}
    {product.noD > 0 ? <div><p>Product D: {product.noD} cost: {priceD}</p></div> : ''}
    {totalPrice > 0 ? <p>Total: {totalPrice}</p> : ''}
    </div>
  )
}
export default Cart
