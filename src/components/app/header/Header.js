import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../auth/actions';
import Error from '../Error';
import './header.css';

class Header extends PureComponent {

  render() {

    const { error, user, logout } = this.props;
    
    return (
      <header id="header">
        <h1>Guess That Pokemon!</h1>
        <div className="user-header">
          {user && <h3>Hello, {user.name}</h3>}
          <ul className="user-links">
            {
              user
                ? <li><Link to="/game" onClick={logout}>Log out</Link></li>
                : 
                <Fragment>
                  <li><Link to="/auth/signin">Sign In</Link></li>
                  <li><Link to="/auth/signup">Sign Up</Link></li>
                </Fragment>
            }
          </ul>
        </div>
        <nav>
          <ul>
            <li><Link to="/game">Play</Link></li>
            <li><Link to="/leaderboard">Scores</Link></li>
          </ul>
        </nav>
        {error && <Error error={error}/> }
      </header>
    );
  }
}

export default connect(
  state => ({ error: state.error, user: state.user }),
  ({ logout })
)(Header);