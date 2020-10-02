import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import Toolbar from './Toolbar';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //let {name, email} = this.props;
    return(
    <div>
      <Toolbar />
      <Form>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          onChange={this._handleEmailField}
          value={this.props.email}
          />
      </Form><br/>
      {
      this.state.email.length 
        ? <h3>{this.props.email && this.props.email}</h3>
        : <h3>Type your name homie!</h3>
      }
      <ul>
        { this.props.potholes && this.props.potholes.map( (pothole, key) => <li key={key}>{pothole.sr_location}</li>)}
      </ul>
    </div>
    )
  }

  _handleEmailField = (e) => {
    this.setState({...this.state, email: e.currentTarget.value});
  }
  
}

export default Main;