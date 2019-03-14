import React from 'react';
import NavBarSide from './leftSidebar';
import IssuesCards from './issuesCards';
import IssuesForm from './IssuesForm';

const DashboardPage = () => (
  <div className="row">
    <div className="col-md-2">
      <NavBarSide />
    </div>
    <div className="col-md-10">
      <IssuesForm />
      <IssuesCards />
    </div>
  </div>
);

export default DashboardPage;
