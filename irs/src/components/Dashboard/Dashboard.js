import React from 'react';
import NavBarSide from './leftSidebar';
import IssuesCards from './IssuesCards';

const DashboardPage = () => (
  <div className="row">
    <div className="col-md-2">
      <NavBarSide />
    </div>
    <div className="col-md-10">
      <IssuesCards />
    </div>
  </div>
);

export default DashboardPage;
