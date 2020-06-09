import React from 'react';
import Products from './Products';
import Cart from './Cart';
import Header from './Header';
import products from '../assets/products.json';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noOfA: localStorage.getItem('noOfA') || 0,
      noOfB: localStorage.getItem('noOfB') || 0,
      noOfC: localStorage.getItem('noOfC') || 0,
      noOfD: localStorage.getItem('noOfD') || 0,
      totalPrice: 0,
      aPrice: 0,
      bPrice: 0,
      cPrice: 0,
      dPrice: 0,
      aDealPrice: 0,
      bDealPrice: 0,
      finalAPrice: 0,
      finalBPrice: 0,
      finalCPrice: 0,
      finalDPrice: 0,
      cartA: 0,
      cartB: 0,
      cartC: 0,
      cartD: 0,
    }
  }
  setProductPrices = () => {
    let aPrice, bPrice, cPrice, dPrice;
    let aDealPrice, bDealPrice;
    let product = Object.values(products);

    for (var i = 0; i < products.length; i++) {
      {i === 0 ? aPrice = product[i].price :
       i === 1 ? bPrice = product[i].price :
       i === 2 ? cPrice = product[i].price :
       i === 3 ? dPrice = product[i].price : console.log('no match');}
    }
    for (var i = 0; i < products.length; i++) {
      if (product[i].deal) {
        {i === 0 ? aDealPrice = product[i].dealPrice :
         i === 1 ? bDealPrice = product[i].dealPrice : console.log('no match');}
      }
    }
    this.setState({
      aPrice: aPrice,
      bPrice: bPrice,
      cPrice: cPrice,
      dPrice: dPrice,
      aDealPrice: aDealPrice,
      bDealPrice: bDealPrice,
    })

  }

  updateTotalPrice = () => {
    let a = this.state.noOfA,
        b = this.state.noOfB,
        c = this.state.noOfC,
        d = this.state.noOfD;

    let aDeals = Math.floor(a/3),
        bDeals = Math.floor(b/2);

    let finalAPrice,
        finalBPrice,
        finalCPrice = c * this.state.cPrice,
        finalDPrice = d * this.state.dPrice;

    if (Number(a) % 3 != 0) {
      let aString = (a/3).toString().includes('.66')
      {aString ? finalAPrice = (this.state.aDealPrice * aDeals) + (this.state.aPrice * 2)
       : finalAPrice = (this.state.aDealPrice * aDeals) + this.state.aPrice}
    } else {
      finalAPrice = aDeals * this.state.aDealPrice;
    }

    if (Number(b) % 2 != 0) {
      finalBPrice = (this.state.bDealPrice * bDeals) + this.state.bPrice;
    } else {
      finalBPrice = bDeals * this.state.bDealPrice;
    }

    this.setState({
      finalAPrice: finalAPrice,
      finalBPrice: finalBPrice,
      finalCPrice: finalCPrice,
      finalDPrice: finalDPrice,
      totalPrice: finalAPrice + finalBPrice + finalCPrice + finalDPrice
    })
    console.log(this.state.totalPrice);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    })
    localStorage.setItem([name], value);
  }


  updateCart = () => {
    this.setState({
      cartA: this.state.noOfA,
      cartB: this.state.noOfB,
      cartC: this.state.noOfC,
      cartD: this.state.noOfD,
    }, function() {
      this.updateTotalPrice();
    })
  }

  clearCart = () => {
    localStorage.clear();
    this.setState({
      noOfA: 0,
      noOfB: 0,
      noOfC: 0,
      noOfD: 0
    },function(){
      this.updateCart();
    })
  }

  componentDidMount() {
    this.setProductPrices();
    this.updateCart();
  }

  render() {
    const { noOfA, noOfB, noOfC, noOfD,
            finalAPrice, finalBPrice, finalCPrice, finalDPrice, totalPrice,
            cartA, cartB, cartC, cartD } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <Products updateCart={this.updateCart} productsList={products} A={noOfA} B={noOfB} C={noOfC} D={noOfD} handleChange={this.handleChange}/>
          <Cart clearCart={this.clearCart} noA={cartA} noB={cartB} noC={cartC} noD={cartD} A={finalAPrice} B={finalBPrice} C={finalCPrice} D={finalDPrice} totalPrice={totalPrice}/>
        </div>
      </>
    )
  }

}
export default Main;
