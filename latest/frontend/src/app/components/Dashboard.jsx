import React from 'react';

const imageUrls = {
  g: require('../img/g.png'),
  g1: require('../img/g1.png'),
  g2: require('../img/g2.png'),
  g3: require('../img/g3.png'),
  g4: require('../img/g4.png'),
  g5: require('../img/g5.png'),
  circle: require('../img/circle.png')
};

export default class Dashboard extends React.Component {
  render() {
    return <div className="container">

      <div id="content">

        <div className="stats-cols">
          <section>
            <article>
              <h4>Running Applications</h4>

              <p>245</p>
            </article>
            <article>
              <h4>Running Images</h4>

              <p>241</p>
            </article>
            <article>
              <h4>Running Services</h4>

              <p>55</p>
            </article>
            <article>
              <h4>Running Hosts</h4>

              <p>24</p>
            </article>
            <article>
              <h4>Running Host Rings</h4>

              <p>3</p>
            </article>
          </section>
        </div>

        <div className="panel">
          <div className="head">
            <h3>System Utilization Overview</h3>
            <a href="#" className="btn btn-grey">More Details</a>
          </div>
          <div className="body ff">
            <img src={ imageUrls.g } alt=""/>
          </div>
        </div>

        <div className="panel">
          <div className="head">
            <h3>Application Overview</h3>
            <a href="#" className="btn btn-grey">More Details</a>
          </div>
          <div className="body">
            <section className="app-over">
              <article>
                <div className="left">
                  <h4>Reported Availability</h4>

                  <p>24%</p>
                </div>
                <div className="right">
                  <img src={ imageUrls.g1 } alt=""/>
                </div>
              </article>
              <article>
                <div className="left">
                  <h4>Error Count</h4>

                  <p>124</p>
                </div>
                <div className="right">
                  <img src={ imageUrls.g2 } alt=""/>
                </div>
              </article>
              <article>
                <div className="left">
                  <h4>Deviation Errors</h4>

                  <p>48%</p>
                </div>
                <div className="right">
                  <img src={ imageUrls.g3 } alt=""/>
                </div>
              </article>
              <article>
                <div className="left">
                  <h4>Reported Availability</h4>

                  <p>102</p>
                </div>
                <div className="right">
                  <img src={ imageUrls.g4 } alt=""/>
                </div>
              </article>
              <article className="label">
                <div className="left">
                </div>
                <div className="right">
                  <img src={ imageUrls.g5 } alt=""/>
                </div>
              </article>
            </section>
          </div>
        </div>

        <div className="row">
          <div className="col">

            <div className="panel">
              <div className="head">
                <h3>Highest Overall Utilization</h3>
                <a href="#" className="btn btn-grey">Full List</a>
              </div>
              <div className="body">
                <section className="overall-over">
                  <article>
                    <div className="left">
                      <h4>System Name 123</h4>
                    </div>
                    <div className="right">
                      <ul>
                        <li><span className="blue" style={{width: '85%'}}></span></li>
                        <li><span className="purple" style={{width: '73%'}}></span></li>
                        <li><span className="red" style={{width: '75%'}}></span></li>
                        <li><span className="yellow" style={{width: '47%'}}></span></li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <div className="left">
                      <h4>System Name 123</h4>
                    </div>
                    <div className="right">
                      <ul>
                        <li><span className="blue" style={{width: '85%'}}></span></li>
                        <li><span className="purple" style={{width: '73%'}}></span></li>
                        <li><span className="red" style={{width: '75%'}}></span></li>
                        <li><span className="yellow" style={{width: '47%'}}></span></li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <div className="left">
                      <h4>System Name 123</h4>
                    </div>
                    <div className="right">
                      <ul>
                        <li><span className="blue" style={{width: '85%'}}></span></li>
                        <li><span className="purple" style={{width: '73%'}}></span></li>
                        <li><span className="red" style={{width: '75%'}}></span></li>
                        <li><span className="yellow" style={{width: '47%'}}></span></li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <div className="left">
                      <h4>System Name 123</h4>
                    </div>
                    <div className="right">
                      <ul>
                        <li><span className="blue" style={{width: '85%'}}></span></li>
                        <li><span className="purple" style={{width: '73%'}}></span></li>
                        <li><span className="red" style={{width: '75%'}}></span></li>
                        <li><span className="yellow" style={{width: '47%'}}></span></li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <div className="left">
                      <h4>System Name 123</h4>
                    </div>
                    <div className="right">
                      <ul>
                        <li><span className="blue" style={{width: '85%'}}></span></li>
                        <li><span className="purple" style={{width: '73%'}}></span></li>
                        <li><span className="red" style={{width: '75%'}}></span></li>
                        <li><span className="yellow" style={{width: '47%'}}></span></li>
                      </ul>
                    </div>
                  </article>
                </section>
                <div className="captions">
                  <ul>
                    <li className="cpu"><span className="dot blue"></span> CPU</li>
                    <li className="net"><span className="dot purple"></span> Network</li>
                    <li className="memory"><span className="dot red"></span> Memory</li>
                    <li><span className="dot yellow"></span> Disk</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <div className="col">

            <div className="panel">
              <div className="head">
                <h3>Highest Overall Utilization</h3>
                <a href="#" className="btn btn-grey">Full List</a>
              </div>
              <div className="body">
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
              </div>
            </div>

          </div>
        </div>

      </div>

      <aside id="sidebar">
        <div className="events">
          <select>
            <option>All Users</option>
          </select>

          <h3>Events</h3>
          <h4>TODAY, FEB 24</h4>
          <ul>
            <li>
              <p><strong>9:00 AM</strong></p>

              <p>System Event 235235 Container Instance Stopped</p>
            </li>
            <li>
              <p><strong>10:42 AM</strong></p>

              <p>New Application created by <a href="#">Cynthia Reynolds</a></p>
            </li>
            <li>
              <p><strong>11:15 AM</strong></p>

              <p>System Event 235235 Container Instance Stopped</p>
            </li>
            <li>
              <p><strong>14:56 AM</strong></p>

              <p>New Application created by <a href="#">Kris Thompson</a>.</p>
            </li>
            <li>
              <p><strong>9:00 AM</strong></p>

              <p>Application name 123456 modified by <a href="#">Min Peng</a></p>
            </li>
          </ul>
          <h4>YESTERDAY, FEB 23</h4>
          <ul>
            <li>
              <p><strong>9:00 AM</strong></p>

              <p>System Event 235235 Container Instance Stopped</p>
            </li>
            <li>
              <p><strong>10:42 AM</strong></p>

              <p>New Application created by <a href="#">Cynthia Reynolds</a></p>
            </li>
            <li>
              <p><strong>11:15 AM</strong></p>

              <p>System Event 235235 Container Instance Stopped</p>
            </li>
            <li>
              <p><strong>14:56 AM</strong></p>

              <p>New Application created by <a href="#">Kris Thompson</a>.</p>
            </li>
            <li>
              <p><strong>9:00 AM</strong></p>

              <p>Application name 123456 modified by <a href="#">Min Peng</a></p>
            </li>
            <li>
              <p><strong>11:15 AM</strong></p>

              <p>System Event 235235 Container Instance Stopped</p>
            </li>
            <li>
              <p><strong>14:56 AM</strong></p>

              <p>New Application created by <a href="#">Kris Thompson</a>.</p>
            </li>
            <li>
              <p><strong>9:00 AM</strong></p>

              <p>Application name 123456 modified by <a href="#">Min Peng</a></p>
            </li>
          </ul>
        </div>
      </aside>
    </div>;
  }
}
