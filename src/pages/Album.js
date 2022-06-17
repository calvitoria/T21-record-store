import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
// import Loading from './components/Loading';
import LoadingImg from './components/LoadingImg';
import Footer from './components/Footer';
import '../musicList.css';

class Album extends React.Component {
  state = {
    loadingText: false,
    listOfSongs: [],
    artistName: '',
    collectionName: '',
    artworkUrl100: '',
    favoriteSongsList: [],
  }

  componentDidMount() {
    this.getListOfSongs();
    this.getListOfFavs();
  }

  // seta estados
  updateState = (requestedSongs) => {
    this.setState({ artistName: requestedSongs[0].artistName,
      collectionName: requestedSongs[0].collectionName,
      artworkUrl100: requestedSongs[1].artworkUrl100 });
  }

  // função para chamar as músicas do album com id X
  getListOfSongs = async () => {
    const { match: { params: { id } } } = this.props;
    const requestedSongs = await getMusics(id);
    this.setState({ listOfSongs: requestedSongs },
      () => this.updateState(requestedSongs));
  }

  // função para recuperar a lista de favoritas
  getListOfFavs = async () => {
    this.setState({ loadingText: true });
    const favoritesSongs = await getFavoriteSongs();
    this.setState({ loadingText: false,
      favoriteSongsList: favoritesSongs });
  }

  render() {
    const { listOfSongs, artistName,
      collectionName, artworkUrl100,
      loadingText, favoriteSongsList } = this.state;
    if (loadingText) return <LoadingImg />;
    return (
      <>
        <Header />
          <main>
            <section className="album-container">
              <div className="albumInfo">
                <img alt="album cover" src={ artworkUrl100 } />
                <h3 >{`${collectionName}`}</h3>
                <p>{`By ${artistName}`}</p>
              </div>
              <div className="album-songs">
                {
                // função para 'printar' o nome das músicas na tela
                  listOfSongs.flatMap((song) => song.kind === 'song'
                && <MusicCard song={ song } favList={ favoriteSongsList } />)
                }
              </div>
            </section>
            <Footer />
          </main>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
  }).isRequired,
};

export default Album;
