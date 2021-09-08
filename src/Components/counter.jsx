import React, { PureComponent } from 'react';

class Counter extends React.Component {
    render() { 
        return <div>
            <span>{this.props.counter.value}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
            {/* <button onClick={()=>this.props.onDelete(this.props.id)} >Delete</button> */}
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} >Delete</button>
        
        </div>;
    }
}
 
export default Counter;