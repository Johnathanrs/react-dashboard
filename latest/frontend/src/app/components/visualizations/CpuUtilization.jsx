import React from 'react';
import _ from 'lodash';

import Gauge from './Gauge.jsx';

const mockImageUrl = require('../../img/odal.png');

const renderItems = (items) => _.map(items, (item, index)  => {
  return <article key={index}>
    <div className="left1">
      <h4>{index + 1}. {item.Names[0]} </h4>
    </div>
    <div className="right1">
      <Gauge value={item.percent}/>
    </div>
    <div className="modal">
      <img src={ mockImageUrl } alt=""/>
    </div>
  </article>;
});

/**
 * A component for CPU Utilization visualization.
 * @param props React component properties
 * @constructor
 */
const CpuUtilization = (props) => <section id="cpu" className="overall-over">
  { renderItems(props.items) }
</section>;

export default CpuUtilization;
