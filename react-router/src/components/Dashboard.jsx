import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          {" "}
          <Link to="courses">Courses</Link>
        </li>
        <li>
          <Link to="forms">Forms</Link>
        </li>
        <li>
          <Link to="checklist">checklist</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Dashboard