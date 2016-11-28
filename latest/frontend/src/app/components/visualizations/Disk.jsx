import React from 'react';

function bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

const renderItems = (items) => _.map(items, (item, index)  => {
  return <article>
    <div className="left">
      <h4>{index + 1}. {item.name.substr(5).substr(0,15)} </h4>
    </div>
    <div className="right">
      <h4>{bytesToSize(item.read)}/{bytesToSize(item.write)}</h4>
    </div>
    <ul>
      <li><span className="purple" style={ {width: '80%'} }></span></li>
      <li><span className="red" style={ {width: '75%'} }></span></li>
    </ul>
  </article>
});

/**
 * A component for CPU Utilization visualization.
 * @param props React component properties
 * @constructor
 */
const Disk = (props) => <section id="disk" className="overall-over">
  { renderItems(props.items) }
</section>;



export default Disk;
