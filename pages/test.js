import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function test() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Test</h1>
        </Col>
        <Col>
          <h2>123</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default test