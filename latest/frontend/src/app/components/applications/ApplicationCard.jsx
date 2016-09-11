import React from 'react';

const mockImageUrls = {
  '1': require('../../img/1.png'),
  'ico_red': require('../../img/ico_red.png'),
  'ico_flag': require('../../img/ico_flag.png'),
  'ico_green': require('../../img/ico_green.png')
};

class ApplicationCard extends React.Component {
  render() {
    const card = this.props.card;
    const errorCount = 0;
    const instanceCount = 12;
    const responseTime = '12 SEC';
    const serviceName = 'None';
    return <article>
      <div className="head">
        <img src={ mockImageUrls['1'] } alt=""/>
        <h4><a href="#">{ card.appName }</a></h4>

        <div className="tags">
          <a href="#" className="stat">
            <img src={ mockImageUrls['ico_flag'] } width="12" alt=""/>
            <span>{ errorCount  } ERRORS</span>
          </a>
          <a href="#" className="stat ins">
            <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
            <span>{ instanceCount } INSTANCES</span>
          </a>
        </div>
      </div>
      <ul>
        <li><strong>Deployment</strong><span>{ card.appStatus }</span></li>
        <li><strong>Response time</strong><span>{ responseTime }</span></li>
        <li><strong>Service</strong><span>{ serviceName }</span></li>
        <li><strong>Uptime</strong><span>{ card.appUptime }</span></li>
      </ul>
    </article>;
  }
}

export default ApplicationCard;
