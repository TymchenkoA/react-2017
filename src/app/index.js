import React, { Component } from 'react';
import { Dropdown } from './components/Dropdown/index.jsx';
import img1 from './img/movie1.jpg';
import './index.less';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Dropdown />
        <img src={img1} alt='' />
      </div>
    );
  }
}
