import React from 'react';
import LoadingImg from './components/LoadingImg';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import '../home.css';



class Home extends React.Component {
  state = {
    loadingText: false,
  }

  render() {
    const { loadingText } = this.state;
    if (loadingText) {
      return <LoadingImg />;
    } return (
      <>
        <Header />
        <main className='landing-page-wrapper'>
          < img alt='vinyl and singer' src='https://user-images.githubusercontent.com/95686401/174326880-ca63c2ef-cb10-462d-ade4-66d0b4b05373.png' />
          <div className='text-lp-wrapper'>
            <h3>T21B - record store </h3>
            <h1>Music is <br/>life itself.</h1>
            <p> Bem vindo à maior loja musical do Brasil! Aproveite o frete grátis nas compras acima de R$: 200,00!</p>
            <Link className="home-button" to="/search">Encontrar o novo álbum da minha vida</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
