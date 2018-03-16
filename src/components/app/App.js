import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Leaderboard from './Leaderboard';

class App extends PureComponent {

  render() {

    return (
      <section className="home">
        <Router>
          <main role="main">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/Game" component={Game}/>
              <Route exact path="/Leaderboard" component={Leaderboard}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </Router>
      </section>
    );
  }
}

export default connect(
  null
)(App);