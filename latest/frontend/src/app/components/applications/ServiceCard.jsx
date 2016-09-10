import React from 'react';

const ServiceCard = () => <div className="service-card">
  <div className="left-side">
    <div className="avatar">
      <img src="img/2.png" alt=""/>
    </div>
    <h3>MDL_Gateway</h3>

    <div className="tags">
      <a href="#" className="stat">
        <img src="img/ico_red.png" width="15" alt=""/>
        <span>0 ERRORS</span>
      </a>
      <a href="#" className="stat ins">
        <img src="img/ico_green.png" width="17" alt=""/>
        <span>12 INSTANCES</span>
      </a>
    </div>
    <ul>
      <li><strong>DEPLOYMENT</strong><span>Undeployed</span></li>
      <li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
      <li><strong>SERVICE</strong><span>None</span></li>
      <li><strong>UPTIME</strong><span>12 hours 2 Min</span></li>
    </ul>
  </div>
  <div className="right-side">
    <div className="stats">
      <ul>
        <li className="green">
          <strong>2</strong>
          <img src="img/ico_s_3.png" alt=""/>
          <span className="text">Database</span>
        </li>
        <li className="grey">
          <strong>10</strong>
          <img src="img/ico_s_2.png" alt=""/>
          <span className="text">Web Engine</span>
        </li>
        <li className="blue">
          <strong>12</strong>
          <img src="img/ico_s_1.png" alt=""/>
          <span className="text">Applications</span>
        </li>
      </ul>
    </div>
    <div className="graph">
      <img src="img/3.png" alt=""/>
    </div>
  </div>
</div>;

export default ServiceCard;