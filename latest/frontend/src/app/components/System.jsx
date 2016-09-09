import React from 'react';

export default class System extends React.Component {
  render() {
    return <div>
      <div className="bg-d v2">
        <div className="container ff">

          <div className="tabs">
            <ul>
              <li className="current"><a href="#top">Top 5</a></li>
              <li><a href="#bot">Bottom 5</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container ff v6">
        <div className="tab-content active" id="top">
          <div className="row row-4">
            <div className="col">

              <div className="panel">
                <div className="head">
                  <h3>CPU Utilization</h3>
                </div>
                <div className="body">
                  <section id="cpu" className="overall-over">
                    <article>
                      <div className="left1">
                        <h4>1. Container_123 </h4>
                      </div>
                      <div className="right1">

                      </div>
                      <div className="modal">
                        <img src="img/odal.png" alt=""/>
                      </div>
                    </article>
                    <article>
                      <div className="left2">
                        <h4>2. Container_123 </h4>
                      </div>
                      <div className="right2">
                      </div>
                      <div className="modal">
                        <img src="img/odal.png" alt=""/>
                      </div>
                    </article>
                    <article>
                      <div className="left3">
                        <h4>3. Container_123 </h4>
                      </div>
                      <div className="right3">
                      </div>
                      <div className="modal">
                        <img src="img/odal.png" alt=""/>
                      </div>
                    </article>
                    <article>
                      <div className="left4">
                        <h4>4. Container_123 </h4>
                      </div>
                      <div className="right4">
                      </div>
                      <div className="modal">
                        <img src="img/odal.png" alt=""/>
                      </div>
                    </article>
                    <article>
                      <div className="left5">
                        <h4>5. Container_123 </h4>
                      </div>
                      <div className="right5">
                      </div>
                      <div className="modal">
                        <img src="img/odal.png" alt=""/>
                      </div>
                    </article>
                  </section>
                </div>
              </div>

            </div>
            <div className="col">

              <div className="panel">
                <div className="head">
                  <h3>Memory Utilization</h3>
                </div>
                <div className="body">
                  <section id="memory" className="overall-over v3">
                    <article>
                      <div className="left">
                        <h4 className="appName">1. Application ABC</h4>
                      </div>
                      <div className="right">
                        <h4>100%</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '10%'} }></span></li>
                      </ul>
                    </article>
                    <article>
                      <div className="left">
                        <h4 className="appName">2. Application ABC</h4>
                      </div>
                      <div className="right">
                        <h4>100%</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '10%'} }></span></li>
                      </ul>
                    </article>
                    <article>
                      <div className="left">
                        <h4 className="appName">3. Application ABC</h4>
                      </div>
                      <div className="right">
                        <h4>100%</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '10%'} }></span></li>
                      </ul>
                    </article>
                    <article>
                      <div className="left">
                        <h4 className="appName">4. Application ABC</h4>
                      </div>
                      <div className="right">
                        <h4>100%</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '10%'} }></span></li>
                      </ul>
                    </article>
                    <article>
                      <div className="left">
                        <h4 className="appName">5. Application ABC</h4>
                      </div>
                      <div className="right">
                        <h4>100%</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '10%'} }></span></li>
                      </ul>
                    </article>
                  </section>
                </div>
              </div>

            </div>
            <div className="col">

              <div className="panel">
                <div className="head">
                  <h3>Network</h3>
                </div>
                <div className="body">
                  <section id="network" className="overall-over v4">
                    <article>
                      <div className="left">
                        <h4>1. Container_123</h4>
                      </div>
                      <div className="right">
                        <h4>90/21 </h4>
                      </div>
                    </article>
                    <article>
                      <div className="left">
                        <h4>2. Container_123</h4>
                      </div>
                      <div className="right">
                        <h4>90/21 </h4>
                      </div>
                    </article>
                    <article>
                      <div className="left">
                        <h4>3. Container_123</h4>
                      </div>
                      <div className="right">
                        <h4>90/21 </h4>
                      </div>
                    </article>
                    <article>
                      <div className="left">
                        <h4>4. Container_123</h4>
                      </div>
                      <div className="right">
                        <h4>90/21 </h4>
                      </div>
                    </article>
                    <article>
                      <div className="left">
                        <h4>5. Container_123</h4>
                      </div>
                      <div className="right">
                        <h4>90/21 </h4>
                      </div>
                    </article>
                  </section>
                </div>
              </div>

            </div>
            <div className="col">

              <div className="panel">
                <div className="head">
                  <h3>Disk</h3>
                </div>
                <div className="body">
                  <section id="disk" className="overall-over v5">
                    <article>
                      <div className="left">
                        <h4>1. CPU_123 </h4>
                      </div>
                      <div className="right">
                        <h4>Err/Err</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '80%'} }></span></li>
                        <li><span className="red" style={ {width: '75%'} }></span></li>
                      </ul>
                    </article>
                    <article>
                      <div className="left">
                        <h4>2. CPU_123 </h4>
                      </div>
                      <div className="right">
                        <h4>98/60</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '80%'} }></span></li>
                        <li><span className="red" style={ {width: '75%'} }></span></li>
                      </ul>
                    </article>
                    <article>
                      <div className="left">
                        <h4>3. CPU_123 </h4>
                      </div>
                      <div className="right">
                        <h4>98/60</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '80%'} }></span></li>
                        <li><span className="red" style={ {width: '75%'} }></span></li>
                      </ul>
                    </article>
                    <article>
                      <div className="left">
                        <h4>4. CPU_123 </h4>
                      </div>
                      <div className="right">
                        <h4>98/60</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '80%'} }></span></li>
                        <li><span className="red" style={ {width: '75%'} }></span></li>
                      </ul>
                    </article>
                    <article>
                      <div className="left">
                        <h4>5. CPU_123 </h4>
                      </div>
                      <div className="right">
                        <h4>98/60</h4>
                      </div>
                      <ul>
                        <li><span className="purple" style={ {width: '80%'} }></span></li>
                        <li><span className="red" style={ {width: '75%'} }></span></li>
                      </ul>
                    </article>
                  </section>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="tab-content" id="bot">

          <div className="panel">
            <div className="head">
              <h3>Tab2</h3>
            </div>
          </div>
        </div>

        <div id="FilterableContainerListingBoxcontainer">
        </div>
      </div>
    </div>;
  }
}