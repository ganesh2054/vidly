import React, { PureComponent } from 'react';
import Counter from './counter';

class Counters extends React.Component {
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

    render() { 
        return <div>
                <button onClick={this.handleReset} >Reset</button>
            {/* {this.state.counters.map(counter=><Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value}/>)} */}
            {this.state.counters.map(counter=><Counter key={counter.id} onDelete={this.handleDelete} counter={counter}/>)}
        </div>;
    }
}
 
export default Counters;