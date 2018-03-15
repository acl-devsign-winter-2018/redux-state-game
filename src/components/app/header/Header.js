import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Header extends Component {

  render() { 
    return (
      <header role="banner" id="header">
        <section className="head-container maxwidth-wrap">
          <h1 className="logo">Title</h1>
          <nav>
            <ul>
              <li><Link to="/">Game</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/history">History</Link></li>
            </ul>
          </nav>
        </section> 
      </header>
    );
  }
}