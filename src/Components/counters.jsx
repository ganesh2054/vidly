import React, { PureComponent } from 'react';
import Counter from './counter';

class Counters extends React.Component {
  

    render() { 
        return <div>
                <button onClick={this.props.onReset} >Reset</button>
            {/* {this.state.counters.map(counter=><Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value}/>)} */}
            {this.props.counters.map(counter=><Counter key={counter.id} onDelete={this.props.onDelete} counter={counter} onIncrement={this.props.onIncrement}/>)}
        </div>;
    }
}
 
export default Counters;