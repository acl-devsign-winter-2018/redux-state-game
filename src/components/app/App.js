import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import Board from './board/Board';

export default class App extends Component {

  render() {
    
    return (
      <div className="app">
        
        <Router>
          <div>
            <Header/>
            <main role="main" id="main">
              <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route path="/about" component={About}/> */}
                {/* <Route path="/movies/:id" render={({ match }) => <MovieDetail imdbID={match.params.id}/>}/> */}
                <Redirect to="/"/>
              </Switch>

              <Board/>
            </main>
          </div>
        </Router>

        <Footer/>
      </div>
    );
  }
}