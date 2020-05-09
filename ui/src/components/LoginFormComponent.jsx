import React from 'react';
import { connect } from 'react-redux';
import {Form, Button, Col} from 'react-bootstrap';

import {getAuthToken} from "../actions/auth";

class LoginFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleTextInputChange = (name, event) => {
    this.setState({...this.state, [name]: event.target.value });
  };

  submitLogin = () => {
    const {email, password} = this.state;
    const {dispatch} = this.props;

    dispatch(getAuthToken(email, password))
  };

  render() {
    return(
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={this.handleTextInputChange.bind(this, 'email')} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={this.handleTextInputChange.bind(this, 'password')} />
        </Form.Group>
        <div style={{textAlign: 'center'}}>
          <div style={{display: 'inline-block'}}>
            <Button variant="primary" onClick={this.submitLogin.bind()}>
              Login
            </Button>
          </div>
        </div>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(LoginFormComponent)
