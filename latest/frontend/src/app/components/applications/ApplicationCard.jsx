import React from 'react';

const ApplicationCard = () => <article>
  <div className="head">
    <img src="img/1.png" alt=""/>
    <h4><a href="#">redis</a></h4>

    <div className="tags">
      <a href="#" className="stat">
        <img src="img/ico_red.png" width="12" alt=""/>
        <span>2 ERRORS</span>
      </a>
      <a href="#" className="stat ins">
        <img src="img/ico_green.png" width="13" alt=""/>
        <span>12 INSTANCES</span>
      </a>
    </div>
  </div>
  <ul>
    <li><strong>DEPLOYMENT</strong><span>Undeployed</span></li>
    <li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
    <li><strong>SERVICE</strong><span>None</span></li>
    <li><strong>UPTIME</strong><span>12 hours 2 Min</span></li>
  </ul>
</article>;

export default ApplicationCard;
