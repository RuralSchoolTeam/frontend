import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/" className="btn btn-success btn-block">
        Issue Log
      </Link>
      <Link to="/issue/devices" className="btn  btn-block">
        Devices
      </Link>
      <Link to="/issue/equipment" className="btn btn-block">
        Equipment
      </Link>
      <Link to="/issue/teacher" className="btn btn-block">
        Teacher Attendant
      </Link>
      <Link to="/issue/reporting" className="btn btn-block">
        Reporting
      </Link>
      <Link to="/issue/overviews" className="btn btn-block">
        Overviews
      </Link>
    </div>
  );
};
