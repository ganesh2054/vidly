import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react';
import { Component } from 'react';
import Movie  from './Components/movie';


class  App extends Component {
  render(){
    return(
<main className="container">
  <Movie></Movie>
</main>
    );
  }
}

export default App;
