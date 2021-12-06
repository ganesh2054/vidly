import React, { PureComponent } from 'react';
import './style.css';
import Merged from './test3';
import Ganesh from './ttest';
import  Ganesh1 from './ttest2';
class Count extends React.Component {
   
         state={
            count:10
        };

 
    handleCounter=()=>{
        this.setState({count:this.state.count+1})
    };
    render() { 
        return <React.Fragment>
            {/* <h1>{this.state.count}</h1>
            <button onClick={this.handleCounter}>click</button> */}
            {/* <i class='fa fa-heart' aria-hidden='false'></i>
            <i class="fas fa-address-card"></i> */}
            
             {/* <Merged /> */}
             {/* <Ganesh/> */}
             <Ganesh1/>

                
            
           
      
        </React.Fragment>
    }
}
 
export default Count;