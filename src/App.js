import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react';
import { Component } from 'react';
import Movie  from './Components/movie';
import Counter  from './Components/counter';
import Counters  from './Components/counters';


class  App extends Component {
  render(){
    return(
<main className="container">
  <Movie/>
  <Counters/>
</main>
    );
  }
}

export default App;
