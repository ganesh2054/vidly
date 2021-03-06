import React, { PureComponent } from 'react';

class Counter extends React.Component {
    render() { 
        return <>
            <span>{this.props.counter.value}</span>
            <button className="mt-2 ml-5" onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
            {/* <button onClick={()=>this.props.onDelete(this.props.id)} >Delete</button> */}
            <button className="mt-2 ml-5" onClick={()=>this.props.onDelete(this.props.counter.id)} >Remove</button>
        
        </>;
    }
}
 
export default Counter;