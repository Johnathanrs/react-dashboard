import React from 'react';

const mockImageUrls = {
  g1: require('../../img/g1.png'),
  g2: require('../../img/g2.png'),
  g3: require('../../img/g3.png'),
  g4: require('../../img/g4.png'),
  g5: require('../../img/g5.png')
};

const ApplicationOverview = () => <section className="app-over">
  <article>
    <div className="left">
      <h4>Reported Availability</h4>

      <p>24%</p>
    </div>
    <div className="right">
      <img src={ mockImageUrls.g1 } alt=""/>
    </div>
  </article>
  <article>
    <div className="left">
      <h4>Error Count</h4>

      <p>124</p>
    </div>
    <div className="right">
      <img src={ mockImageUrls.g2 } alt=""/>
    </div>
  </article>
  <article>
    <div className="left">
      <h4>Deviation Errors</h4>

      <p>48%</p>
    </div>
    <div className="right">
      <img src={ mockImageUrls.g3 } alt=""/>
    </div>
  </article>
  <article>
    <div className="left">
      <h4>Sample Response Time</h4>

      <p>102</p>
    </div>
    <div className="right">
      <img src={ mockImageUrls.g4 } alt=""/>
    </div>
  </article>
  <article className="label">
    <div className="left">
    </div>
    <div className="right">
      <img src={ mockImageUrls.g5 } alt=""/>
    </div>
  </article>
</section>;

export default ApplicationOverview;
