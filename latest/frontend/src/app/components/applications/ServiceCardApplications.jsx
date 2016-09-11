import React from 'react';
import classNames from 'classnames';

import ApplicationCard from './ApplicationCard.jsx';

const mockImageUrls = {
  '1': require('../../img/1.png'),
  'ico_flag': require('../../img/ico_flag.png'),
  'ico_green': require('../../img/ico_green.png'),
  'ico_red': require('../../img/ico_red.png')
};

const renderCards = (items) => {
  return items.map((item) => <ApplicationCard card={item}/>);
};

// TODO remove this
const mockCard = {appName: 'test', appStatus: 'Deployed', appUptime: '4h 3min'};

class ServiceCardApplications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  _toggleActive() {
    this.setState({active: !this.state.active});
  }

  render() {
    const serviceName = 'MDL_Gateway';
    return <div className="gate-apl">
      <h3 className={classNames({active: this.state.active})} onClick={ () => { this._toggleActive() } }>
        {serviceName} Applications
      </h3>

      <div className={classNames({active: this.state.active, inside: true})}>
        <section className="add-application">
          { renderCards([mockCard, mockCard, mockCard]) }
        </section>
      </div>
    </div>;
  }
}

export default ServiceCardApplications;
