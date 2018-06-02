import React from 'react';
import { Route, Link } from 'react-router-dom';


export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to='/ui/dashboard' className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to='/ui/catalog' className="nav-link">CATALOG</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">FILTER</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">LOCATIONS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">CONTACT US</a>
        </li>
      </ul>
    );
  }
}

