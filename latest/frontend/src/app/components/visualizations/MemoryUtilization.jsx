import React from 'react';

const renderItems = (items) => _.map(items, (item, index)  => {
  return  <article>
    <div className="left">
      <h4 className="appName">{item.container.name.substr(5)}</h4>
    </div>
    <div className="right">
      <h4>{Math.round(item.percent)}%</h4>
    </div>
    <ul>
      <li><span className="purple" style={ {width: item.percent+'%'} }></span></li>
    </ul>
  </article>
});


/**
 * A component for CPU Utilization visualization.
 * @param props React component properties
 * @constructor
 */
const MemoryUtilization = (props) => <section id="memory" className="overall-over">
  { renderItems(props.items) }
</section>;




export default MemoryUtilization;
