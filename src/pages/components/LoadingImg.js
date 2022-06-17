import React from 'react';
import '../../loading.css';

class LoadingImg extends React.Component {
  render() {
    return (
      <div className="loading-container">
        <p>carregando</p>
        {/* lord icon: https://lordicon.com/icons/system/solid/26-play */}
       <lord-icon
        src="https://cdn.lordicon.com/egtlguzx.json"
        trigger="loop"
        className="lord-icon"
        colors="primary:#bcee66">
      </lord-icon>
      </div>
    );
  }
}

export default LoadingImg;
