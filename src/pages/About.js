import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import '../about.css';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div className='text-about'>
              <h3>Olá colega!</h3>
              <h2>Bem vindo à T21B</h2>
              <p> Esse repositório é dedicado à aulinha sobre flexbox ministrada pela Vitória Calvi Meinerz, da turma 21B da Trybe. A ideia é mostrar aos colegas como utilizar flexbox na prática, e também dar algumas dicas de estilização com css puro. </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Profile;
