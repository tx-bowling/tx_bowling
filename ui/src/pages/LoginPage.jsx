import React from 'react'
import { connect } from 'react-redux'

import LoginFormComponent from "../components/LoginFormComponent";
import {Col, Row, Card} from "react-bootstrap";

class LoginPage extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <div style={{textAlign: 'center'}}>
            <div style={{display: 'inline-block'}}>
              <img src={'logo192.png'} height={96} width={96} />
              <h2>Login to TX Bowling</h2>
            </div>
          </div>
          <Card>
            <Card.Body>
              <LoginFormComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={3}></Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(LoginPage);