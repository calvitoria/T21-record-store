import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import LoadingImg from './LoadingImg';
import '../../header.css';

class Header extends React.Component {
state ={
  userName: '',
  loadingText: false,
}

componentDidMount() {
  this.getUserInfo();
}

// função para pegar valores da getUser e atualizar o estado
getUserInfo = async () => {
  this.setState({ loadingText: true });
  const userData = await getUser();
  this.setState({ userName: userData.name, loadingText: false });
}

render() {
  const { loadingText } = this.state;
  if (loadingText) return <LoadingImg />;
  return (
    <header>
      <Link className="a" to="/home">
      <img alt="t21b record Store" src="https://user-images.githubusercontent.com/95686401/174191704-8634db07-982d-4eec-969e-0d6180d26432.png" /></Link>
      <div>       
        <nav>
            {/* ícones: https://fonts.google.com/icons?icon.set=Material+Symbols*/}
          <Link className="link" to="/search">
            <span class="material-symbols-outlined">search</span></Link>
          <Link className="link" to="/about">
            <span class="material-symbols-outlined">waving_hand</span></Link>
          <Link className="link" to="/home">
          <span class="material-symbols-outlined">home</span></Link>
          <Link className="link" to="/cart">
          <span class="material-symbols-outlined">shopping_cart</span>
          </Link>        
        </nav>
      </div>
    </header>
  );
}
}

export default Header;
