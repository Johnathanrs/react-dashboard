import React from 'react';
export default class Menu extends React.Component {
  render() {
    return <ul className="menu">
      <li><a href="02-dashboard.html">Dashboard</a></li>
      <li className="current"><a href="03-system.html">System</a></li>
      <li><a href="01-application-prototype.html">Application</a></li>
    </ul>;
  }
}
