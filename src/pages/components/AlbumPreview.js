import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../albumCard.css'

class AlbumPreview extends React.Component {
  render() {
    const { 
      // artistId,
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
      releaseDate,
      collectionPrice,
    } = this.props;
    return (
      <div className="album-card">
        <img src={ artworkUrl100 } alt={ collectionName } />
        <h4 className="album-title">
          { collectionName }
        </h4>
        <div className="about-album">
        <span>
          { `${artistName}, ${releaseDate.substr(0, 4)}` }
        </span>
        <p>
          { `Preço: U$ ${collectionPrice}` }
        </p>
        </div>
        <div className="btn-container">
          <Link
            className="goToAlbum"
            data-testid={ `link-to-album-${collectionId}` }
            to={ `/album/${collectionId}` }
          >
            go to album
          </Link>
        </div>
      </div>
    );
  }
}

AlbumPreview.propTypes = {
  artistId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  artistName: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  collectionId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  collectionName: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  collectionPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  trackCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default AlbumPreview;
