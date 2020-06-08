import React from 'react';
import Products from './Products';
import products from '../assets/products.json';

class Main extends React.Component {
constructor(props){
  super(props);
  this.state = {

  }
}
  render() {
    return (
      <Products productsList={products} />
    )
  }

}
export default Main;
