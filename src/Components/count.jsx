import React, { PureComponent } from 'react';

class Count extends React.Component {
   
         state={
            count:0
        };

 
    handleCounter=()=>{
        this.setState({count:this.state.count+1})
    };
    render() { 
        return <React.Fragment>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleCounter}>click</button>
            <i class='fa fa-heart' aria-hidden='false'></i>
        </React.Fragment>
    }
}
 
export default Count;