import React from 'react';

const Products = props => {
  let productList = props.productsList;

  const moneyFormat = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  })

  const products = productList.map((product, i) => {
    let dealPrice = product.dealPrice;

    if (dealPrice > 99) {
      dealPrice = moneyFormat.format(product.dealPrice / 100);
      console.log(dealPrice);
    }

    console.log('price: ', dealPrice);

    if (product.deal) {
        return (
          <div key={i}>
            <p>Product Name: {product.name}</p>
            <p>Price: {product.price}p</p>
            <p>Buy {product.NoOfItems} for {product.dealPrice}</p>
          </div>
        )
    } else {
      return (
        <div key={i}>
          <p>Product Name: {product.name}</p>
          <p>Price: {product.price}p</p>
        </div>
      )
    }
  })

  return (
    <>
      {products}
    </>
  )
}
export default Products;
