import React from 'react';
import NavBarSide from './leftSidebar';
import IssuesCards from './issuesCards';
import IssuesForm from './IssuesForm';

import {connect} from 'react-redux';

const DashboardPage = (props) => (
  <div className="row">
    <div className="col-md-2">
      <NavBarSide />
    </div>
    <div className="col-md-10">
      {/* {props.user.authLevel==="admin"? <IssuesForm /> : null} */}
      <IssuesForm />
      <IssuesCards />
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {})(DashboardPage);
