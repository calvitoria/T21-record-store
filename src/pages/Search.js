import React from 'react';
import Header from './components/Header';
// import Loading from './components/Loading';
import LoadingImg from './components/LoadingImg';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumPreview from './components/AlbumPreview';
import '../albunsList.css'
import Footer from './components/Footer';



class Search extends React.Component {
  state = {
    searchField: '',
    isSearchBtnDisabled: true,
    loadingText: true,
    returnedList: [],
    isReturnEmpty: false,
  }

  // função que valida se o botão deve ser habilitado ou não (2 ou mais caracteres)
  validateSearchBtn = () => {
    const { searchField } = this.state;
    const min = 2;
    if (searchField.length >= min) {
      this.setState({ isSearchBtnDisabled: false });
    } else {
      this.setState({ isSearchBtnDisabled: true });
    }
  }

  // função para atualizar o estado a medida que o input de search muda. adasd
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, this.validateSearchBtn);
  }

// função que verifica se array retornado da api é vazio
isReturnEmpty = () => {
  const { returnedList } = this.state;
  if (returnedList.length === 0) {
    this.setState({ isReturnEmpty: true });
  } else this.setState({ isReturnEmpty: false });
}

// função onclick para fazer a requisição e limpar input
onClickSearchBtn = async () => {
  const { searchField } = this.state;
  this.setState({ loadingText: false });
  const returnAPI = await searchAlbumsAPI(searchField);
  this.setState({
    returnedList: returnAPI,
    loadingText: true }, this.isReturnEmpty);
}

render() {
  const { isSearchBtnDisabled, loadingText,
    returnedList, isReturnEmpty } = this.state;
  return (
    <>
      <Header />
      <main className='main-search-pg'>
        {loadingText ? (
          <div className="searchContainer">
            <form>
              <label htmlFor="searchField">
                Que álbum/artista está procurando?
                {' '}
                <br />
                <input
                  name="searchField"
                  onChange={ this.handleChange }
                  id="searchField"
                  type="text"
                  className="icon"
                  data-testid="search-artist-input"
                />
              </label>
              <button
                disabled={ isSearchBtnDisabled }
                onClick={ this.onClickSearchBtn }
                type="button"
                data-testid="search-artist-button"
              >
                Pesquisar
              </button>
            </form>
          </div>
        ) : <LoadingImg />}
        {isReturnEmpty ? (
          <p>Desculpe, não encontramos este álbum/artista.</p>
        ) : (
          <section className="albuns-wrapper">
            {/* lista dos cards */}
            <div className="albuns-container"> 
              {returnedList.flatMap((obj) => (
                <section key={ obj.collectionId }>
                  <AlbumPreview { ...obj } />
                </section>
              ))}
            </div>
          </section>
        )}

      </main>
      < Footer />
    </>
  );
}
}

export default Search;
