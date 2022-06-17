import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import '../cart.css';

class Cart extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className="aboutText">
            <h4>Bem vindo ao seu carrinho</h4>
            <p> seu carrinho está vazio. </p>
            <p> ps: esta funcionalidade não foi implementada ainda </p>
            <img alt='my bad' src='https://media0.giphy.com/media/10VJ2YDMoNEBl6/giphy.gif?cid=ecf05e47s1og52je17b3dnfm2lvqr607v531o07839ywid24&rid=giphy.gif&ct=g'/>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Cart;
