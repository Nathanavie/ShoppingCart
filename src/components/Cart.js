import React from 'react';

const Cart = props => {

  let product = props;
  return (
    <div>
    <h2>Your Cart</h2>
    <p>Your items</p>
    {product.noA > 0 ? <div><p>Product A: {product.noA} cost: {product.A}</p></div> : ''}
    {product.noB > 0 ? <div><p>Product B: {product.noB} cost: {product.B}</p></div> : ''}
    {product.noC > 0 ? <div><p>Product C: {product.noC} cost: {product.C}</p></div> : ''}
    {product.noD > 0 ? <div><p>Product D: {product.noD} cost: {product.D}</p></div> : ''}
    <p>Total: {product.totalPrice}</p>
    </div>
  )
}
export default Cart
