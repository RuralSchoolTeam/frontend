import React from 'react';
// import { connect } from 'react-redux';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

const Whoyouare = props => {
  return (
    <div>
      <Row>
        <Col xs="6">
          <Jumbotron>
            <h1 className="display-3">Board Member</h1>
            <p className="lead">
              <Button color="primary">Select</Button>
            </p>
          </Jumbotron>
        </Col>
        <Col xs="6">
          <Jumbotron>
            <h1 className="display-3">School Admin</h1>
            <p className="lead">
              <Button color="primary">Select</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
};

export default Whoyouare;
