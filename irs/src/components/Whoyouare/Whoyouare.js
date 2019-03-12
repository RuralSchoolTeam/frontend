import React from 'react';
// import { connect } from 'react-redux';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

const Whoyouare = props => {
  return (
    <div>
      <Row>
        <Col xs="6">
          <Jumbotron>
            <h1 className="display-3">I'm a board member</h1>
            <p className="lead">
              <Button color="primary">Select</Button>
            </p>
          </Jumbotron>
        </Col>
        <Col xs="6">
          <Jumbotron>
            <h1 className="display-3">I'm a teacher or school admin</h1>
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
