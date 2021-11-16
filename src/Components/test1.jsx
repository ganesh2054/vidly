
// Resource: 
// https://www.codegrepper.com/code-examples/javascript/how+to+create+textbox+in+react 
// https://reactjs.org/docs/forms.html

import React, { Component } from "react";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div style={{marginTop:'10px'}}> 
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="React" />
        </div> 

        <div> 
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>          
        </div> 

        </form>
      );
    }
  }

export default NameForm;