import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './components/Loading';
import Header from './components/Header';

class Login extends React.Component {
  state = {
    userName: '',
    isButtonDisabled: true,
    loadingText: false,
  }

  // função para validar o botão de entrar
  validateEnterBtn = () => {
    const { userName } = this.state;
    const min = 3;
    if (userName.length >= min) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  // função para atualizar o estado a medida que o input muda.
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, this.validateEnterBtn);
  }

  // função para onCLick >> chama função createUser
  handleClick = async () => {
    const { userName } = this.state;
    const { history } = this.props;
    this.setState({ loadingText: true });
    await createUser({ name: userName });
    this.setState({ loadingText: false });
    history.push('/search');
  }

  render() {
    const { isButtonDisabled, loadingText } = this.state;
    if (loadingText) {
      return <Loading />;
    } return (
      <div className="loginPage" data-testid="page-login">
        <Header />
        <main>
          <form className="loginForm">
            <h3> Login Form </h3>
            <label htmlFor="nameLogin">
              Name
              <input
                onChange={ this.handleChange }
                id="nameLogin"
                name="userName"
                data-testid="login-name-input"
                type="text"
                placeholder="Username"
              />
            </label>
            <button
              onClick={ this.handleClick } // chama função que cria um username >> createUser({name: "Nome digitado"});
              data-testid="login-submit-button"
              type="button"
              disabled={ isButtonDisabled }
            >
              Entrar
            </button>
          </form>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
