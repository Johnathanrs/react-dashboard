import React from 'react';

import ApplicationCard from './ApplicationCard.jsx';

const mockImageUrls = {
  '1': require('../../img/1.png'),
  'ico_flag':  require('../../img/ico_flag.png'),
  'ico_green':  require('../../img/ico_green.png'),
  'ico_red':  require('../../img/ico_red.png')
};

const renderCards = (items) => {
  return items.map((item) => <ApplicationCard card={item} />);
};

// TODO remove this
const mockCard = {appName: 'test', appStatus: 'Deployed', appUptime: '4h 3min'};

const ServiceCardApplications = (props) => {

  return <div className="gate-apl">
    <h3 className="active">MDL_Gateway Applications</h3>

    <div className="inside active">
      <section className="add-application">
        { renderCards([mockCard, mockCard, mockCard]) }
      </section>
    </div>
  </div>;
};

export default ServiceCardApplications;
