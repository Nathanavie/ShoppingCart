import React from 'react';
import { moneyFormat } from '../Utils/utils'

const Cart = props => {
  let product = props;
  let priceA, priceB, priceC, priceD, totalPrice = '0';


  {product.A > 99 ? priceA = moneyFormat.format(product.A / 100) : priceA = `${product.A}p`}
  {product.B > 99 ? priceB = moneyFormat.format(product.B / 100) : priceB = `${product.B}p`}
  {product.C > 99 ? priceC = moneyFormat.format(product.C / 100) : priceC = `${product.C}p`}
  {product.D > 99 ? priceD = moneyFormat.format(product.D / 100) : priceD = `${product.D}p`}
  {product.totalPrice > 99 ? totalPrice = moneyFormat.format(product.totalPrice / 100) : totalPrice = `${product.totalPrice}p`}

  return (
    <div className="cart">
      <div className="productTitle">
        <h2>Your Cart</h2>
      </div>
      <div className="cartItems">
        {totalPrice != '0p' ? <h4>Your items</h4> : <h4>Your Cart is empty</h4>}
        {product.noA > 0 ? <div><p><strong>A</strong> Quantity: {product.noA} Price: {priceA}</p></div> : ''}
        {product.noB > 0 ? <div><p><strong>B</strong> Quantity: {product.noB} Price: {priceB}</p></div> : ''}
        {product.noC > 0 ? <div><p><strong>C</strong> Quantity: {product.noC} Price: {priceC}</p></div> : ''}
        {product.noD > 0 ? <div><p><strong>D</strong> Quantity: {product.noD} Price: {priceD}</p></div> : ''}
        {totalPrice != '0p' ? <><p>Total: {totalPrice}</p> <button className="clearCart" onClick={props.clearCart}>Clear Cart</button></>: ''}
      </div>
    </div>
  )
}
export default Cart
