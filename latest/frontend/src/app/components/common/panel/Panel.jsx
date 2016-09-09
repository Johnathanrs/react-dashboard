import React from 'react';

const Panel = (props) => <div className="panel">
  <div className="head">{ props.title }</div>
  <div className="body">
    { props.children }
  </div>
</div>;
export default Panel;
