import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  render() {
    return (
      <div id="header">
        <Link to="/">Lista</Link>
        <Link to="/details">Details</Link>
        <Link to="/party">Party</Link>
        <Link to="/battle">Batalha</Link>
      </div>
    );
  }
}
