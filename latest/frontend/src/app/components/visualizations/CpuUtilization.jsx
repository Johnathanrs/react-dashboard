import React from 'react';

// TODO support D3 logic

const mockImageUrl = require('../../img/odal.png');

const CpuUtilization = () => <section id="cpu" className="overall-over">
  <article>
    <div className="left1">
      <h4>1. Container_123 </h4>
    </div>
    <div className="right1">

    </div>
    <div className="modal">
      <img src={ mockImageUrl } alt=""/>
    </div>
  </article>
  <article>
    <div className="left2">
      <h4>2. Container_123 </h4>
    </div>
    <div className="right2">
    </div>
    <div className="modal">
      <img src={ mockImageUrl } alt=""/>
    </div>
  </article>
  <article>
    <div className="left3">
      <h4>3. Container_123 </h4>
    </div>
    <div className="right3">
    </div>
    <div className="modal">
      <img src={ mockImageUrl } alt=""/>
    </div>
  </article>
  <article>
    <div className="left4">
      <h4>4. Container_123 </h4>
    </div>
    <div className="right4">
    </div>
    <div className="modal">
      <img src={ mockImageUrl } alt=""/>
    </div>
  </article>
  <article>
    <div className="left5">
      <h4>5. Container_123 </h4>
    </div>
    <div className="right5">
    </div>
    <div className="modal">
      <img src={ mockImageUrl } alt=""/>
    </div>
  </article>
</section>;

export default CpuUtilization;
