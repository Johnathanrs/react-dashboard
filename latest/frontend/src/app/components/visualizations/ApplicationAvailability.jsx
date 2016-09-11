import React from 'react';

const imageUrls = {
  circle: require('../../img/circle.png')
};

const ApplicationAvailability = () => <div>
  <section className="overall-over v2">
    <article>
      <div className="left">
        <h4>Application ABC</h4>
      </div>
      <div className="center">
        <img src={ imageUrls.circle } alt=""/>
      </div>
      <div className="right">
        <ul>
          <li><span className="purple" style={{width: '80%'}}></span></li>
          <li><span className="red" style={{width: '85%'}}></span></li>
          <li><span className="yellow" style={{width: '50%'}}></span></li>
        </ul>
      </div>
    </article>
    <article>
      <div className="left">
        <h4>Application ABC</h4>
      </div>
      <div className="center">
        <img src={ imageUrls.circle } alt=""/>
      </div>
      <div className="right">
        <ul>
          <li><span className="purple" style={{width: '80%'}}></span></li>
          <li><span className="red" style={{width: '85%'}}></span></li>
          <li><span className="yellow" style={{width: '50%'}}></span></li>
        </ul>
      </div>
    </article>
    <article>
      <div className="left">
        <h4>Application ABC</h4>
      </div>
      <div className="center">
        <img src={ imageUrls.circle } alt=""/>
      </div>
      <div className="right">
        <ul>
          <li><span className="purple" style={{width: '80%'}}></span></li>
          <li><span className="red" style={{width: '85%'}}></span></li>
          <li><span className="yellow" style={{width: '50%'}}></span></li>
        </ul>
      </div>
    </article>
    <article>
      <div className="left">
        <h4>Application ABC</h4>
      </div>
      <div className="center">
        <img src={ imageUrls.circle } alt=""/>
      </div>
      <div className="right">
        <ul>
          <li><span className="purple" style={{width: '80%'}}></span></li>
          <li><span className="red" style={{width: '85%'}}></span></li>
          <li><span className="yellow" style={{width: '50%'}}></span></li>
        </ul>
      </div>
    </article>
    <article>
      <div className="left">
        <h4>Application ABC</h4>
      </div>
      <div className="center">
        <img src={ imageUrls.circle } alt=""/>
      </div>
      <div className="right">
        <ul>
          <li><span className="purple" style={{width: '80%'}}></span></li>
          <li><span className="red" style={{width: '85%'}}></span></li>
          <li><span className="yellow" style={{width: '50%'}}></span></li>
        </ul>
      </div>
    </article>
  </section>
  <div className="captions">
    <ul>
      <li><span className="dot purple"></span> Error Count</li>
      <li><span className="dot red"></span> DEVN of Errors</li>
      <li><span className="dot yellow"></span> Sample Response Time</li>
    </ul>
  </div>
</div>;

export default ApplicationAvailability;
