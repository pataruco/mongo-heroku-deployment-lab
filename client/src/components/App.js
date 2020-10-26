import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// Components
import Footer from './Footer.js';
import Header from './Header.js';
// pages
import Home from '../pages/Home.js';
import ListMusic from '../pages/music/list.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/music" component={ListMusic} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
