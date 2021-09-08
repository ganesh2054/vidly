import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react';
import { Component } from 'react';
import Movie  from './Components/movie';
import Counters  from './Components/counters';
import Navbar  from './Components/navbar';


class  App extends Component {
  state={
    counters:[
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:1},
        {id:4,value:0},
    ]
};
handleReset=()=>{
    const counters=this.state.counters.map(c=>{
        c.value=0;
        return c;
    });
    this.setState({counters});
}
handleDelete=(Id)=>{
const counters=this.state.counters.filter(c=>c.id!==Id);
 this.setState({counters:counters})
};
handleIncrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter)
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});

};
  render(){
    return(
      <React.Fragment>
    
<main className="container">
  {/* <Movie/> */}
  <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
  <Counters 
  onDelete={this.handleDelete}
  onIncrement={this.handleIncrement}
  onReset={this.handleReset}
  counters={this.state.counters}
  />
</main>

</React.Fragment>
    );
  }
}

export default App;
