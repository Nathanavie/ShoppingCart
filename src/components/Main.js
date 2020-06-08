import React from 'react';
import Products from './Products';
import products from '../assets/products.json';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noOfA: 0,
      noOfB: 0,
      noOfC: 0,
      noOfD: 0,
    }
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { noOfA, noOfB, noOfC, noOfD } = this.state;
    return (
      <Products productsList={products} A={noOfA} B={noOfB} C={noOfC} D={noOfD} handleChange={this.handleChange}/>
    )
  }

}
export default Main;
