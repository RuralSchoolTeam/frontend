import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTodoItem = styled.div`
  cursor: pointer;
  background: #f78221;
  text-align: center;
  border-radius: 1rem;
  font-size: 1.8rem;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  outline: none;
  font-weight: 700;
  transition: all 0.5s;
`;

export default () => {
  return (
    <div>
      <StyledTodoItem>
        <Link to="/" className="btn btn-block">
          Issue Log
        </Link>
      </StyledTodoItem>

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
