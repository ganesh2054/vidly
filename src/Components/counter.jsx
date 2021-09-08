import React, { PureComponent } from 'react';

class Counter extends React.Component {
   
    state={
        count:this.props.counter.value,
       
        
      
    };
  
    handleIncrement=()=>{
        this.setState({count:this.state.count+1});
      
     
    };
  
   
    render() { 
        return <div>
            <span>{this.state.count}</span>
            <button onClick={()=>this.handleIncrement()}>Increment</button>
            {/* <button onClick={()=>this.props.onDelete(this.props.id)} >Delete</button> */}
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} >Delete</button>
        
        </div>;
    }
}
 
export default Counter;