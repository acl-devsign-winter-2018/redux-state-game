import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Game from './Game';
import Register from './Register';
import History from './History';

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
                <Route exact path="/register" component={Register}/>
                <Route exact path="/history" component={History}/>
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