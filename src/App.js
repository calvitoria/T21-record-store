import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// import './geral.css';
import Album from './pages/Album';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className="main">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/Cart" component={ Cart } />
            <Route path="/home" component={ Home } />
            <Route exact path="/About" component={ About } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
