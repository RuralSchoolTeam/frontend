import React from 'react';
import NavBarSide from './leftSidebar';
import IssuesCards from './IssuesCards';
import { Row, Col } from 'reactstrap';

const DashboardPage = () => (
  <div>
    <Row>
      <Col xs="3">
        <NavBarSide />
      </Col>
      <Col xs="9">
        <IssuesCards />
      </Col>
    </Row>
  </div>
);

export default DashboardPage;
