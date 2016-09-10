import React from 'react';

const mockImageUrls = {
  '1': require('../../img/1.png'),
  'ico_flag':  require('../../img/ico_flag.png'),
  'ico_green':  require('../../img/ico_green.png'),
  'ico_red':  require('../../img/ico_red.png')
};

const ServiceCardApplications = () => <div className="gate-apl">
  <h3 className="active">MDL_Gateway Applications</h3>

  <div className="inside active">
    <section className="add-aplication">
      <article>
        <div className="head">
          <img src={ mockImageUrls['1'] } alt=""/>
          <h4><a href="#">Application_123</a></h4>

          <div className="tags">
            <a href="#" className="stat">
              <img src={ mockImageUrls['ico_flag'] } width="10" alt=""/>
              <span>0 ERRORS</span>
            </a>
            <a href="#" className="stat ins">
              <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
              <span>12 INSTANCES</span>
            </a>
          </div>
        </div>
        <ul>
          <li><strong>DEPLOYMENT</strong><span>Undeployed</span></li>
          <li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
          <li><strong>SERVICE</strong><span>None</span></li>
          <li><strong>UPTIME</strong><span>12 hours 2 Min</span></li>
        </ul>
      </article>
      <article>
        <div className="head">
          <img src={ mockImageUrls['1'] } alt=""/>
          <h4><a href="#">Application_123</a></h4>

          <div className="tags">
            <a href="#" className="stat">
              <img src={ mockImageUrls['ico_red'] } width="12" alt=""/>
              <span>2 ERRORS</span>
            </a>
            <a href="#" className="stat ins">
              <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
              <span>12 INSTANCES</span>
            </a>
          </div>
        </div>
        <ul>
          <li><strong>DEPLOYMENT</strong><span>Undeployed</span></li>
          <li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
          <li><strong>SERVICE</strong><span>None</span></li>
          <li><strong>UPTIME</strong><span>12 hours 2 Min</span></li>
        </ul>
      </article>
      <article>
        <div className="head">
          <img src={ mockImageUrls['1'] } alt=""/>
          <h4><a href="#">Application_123</a></h4>

          <div className="tags">
            <a href="#" className="stat">
              <img src={ mockImageUrls['ico_red'] } width="12" alt=""/>
              <span>2 ERRORS</span>
            </a>
            <a href="#" className="stat ins">
              <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
              <span>12 INSTANCES</span>
            </a>
          </div>
        </div>
        <ul>
          <li><strong>DEPLOYMENT</strong><span>Undeployed</span></li>
          <li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
          <li><strong>SERVICE</strong><span>None</span></li>
          <li><strong>UPTIME</strong><span>12 hours 2 Min</span></li>
        </ul>
      </article>
      <article>
        <div className="head">
          <img src={ mockImageUrls['1'] } alt=""/>
          <h4><a href="#">Application_123</a></h4>

          <div className="tags">
            <a href="#" className="stat">
              <img src={ mockImageUrls['ico_red'] } width="12" alt=""/>
              <span>2 ERRORS</span>
            </a>
            <a href="#" className="stat ins">
              <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
              <span>12 INSTANCES</span>
            </a>
          </div>
        </div>
        <ul>
          <li><strong>DEPLOYMENT</strong><span>Undeployed</span></li>
          <li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
          <li><strong>SERVICE</strong><span>None</span></li>
          <li><strong>UPTIME</strong><span>12 hours 2 Min</span></li>
        </ul>
      </article>
      <article>
        <div className="head">
          <img src={ mockImageUrls['1'] } alt=""/>
          <h4><a href="#">Application_123</a></h4>

          <div className="tags">
            <a href="#" className="stat">
              <img src={ mockImageUrls['ico_red'] } width="12" alt=""/>
              <span>2 ERRORS</span>
            </a>
            <a href="#" className="stat ins">
              <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
              <span>12 INSTANCES</span>
            </a>
          </div>
        </div>
        <ul>
          <li><strong>DEPLOYMENT</strong><span>Undeployed</span></li>
          <li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
          <li><strong>SERVICE</strong><span>None</span></li>
          <li><strong>UPTIME</strong><span>12 hours 2 Min</span></li>
        </ul>
      </article>
      <article>
        <div className="head">
          <img src={ mockImageUrls['1'] } alt=""/>
          <h4><a href="#">Application_123</a></h4>

          <div className="tags">
            <a href="#" className="stat">
              <img src={ mockImageUrls['ico_red'] } width="12" alt=""/>
              <span>2 ERRORS</span>
            </a>
            <a href="#" className="stat ins">
              <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
              <span>12 INSTANCES</span>
            </a>
          </div>
        </div>
        <ul>
          <li><strong>DEPLOYMENT</strong><span>Undeployed</span></li>
          <li><strong>RESPONSE TIME</strong><span>12 SEC</span></li>
          <li><strong>SERVICE</strong><span>None</span></li>
          <li><strong>UPTIME</strong><span>12 hours 2 Min</span></li>
        </ul>
      </article>
    </section>
  </div>
</div>;

export default ServiceCardApplications;
