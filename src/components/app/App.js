import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
// import Home from './home/Home';
import Game from './Game';

export default class App extends Component {

  render() {
    
    return (
      <div className="app">
        
        <Router>
          <div>
            <Header/>
            <main role="main" id="main">
              <Switch>
                <Route exact path="/" component={Game}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>

        <Footer/>
      </div>
    );
  }
}