import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import Button from '../common/button/Button.jsx';
import EditInPlace from '../common/edit/EditInPlace.jsx';

const mockImageUrls = {
  '1': require('../../img/1.png'),
  'ico_red': require('../../img/ico_red.png'),
  'ico_flag': require('../../img/ico_flag.png'),
  'ico_green': require('../../img/ico_green.png')
};

class ApplicationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dirty: null
    };
  }

  render() {
    const card = this.props.card;
    const errorCount = 0;
    const instanceCount = 12;
    const responseTime = '12 SEC';
    const serviceName = 'None';
    const classes = {
      dirty: !!this.state.dirty
    };
    return <article className={ classNames(classes) }>
      <div className="head">
        <img src={ mockImageUrls['1'] } alt=""/>
        <h4><EditInPlace ref="appNameEdit"
                         value={ card.appName }
                         placeholder="Please click here to enter the name"
                         block={ true }
                         onChange={ (newValue) => { this.onAppNameChange(newValue) } }/></h4>

        <div className="tags">
          <a href="#" className="stat">
            <img src={ mockImageUrls['ico_flag'] } width="12" alt=""/>
            <span>{ errorCount  } ERRORS</span>
          </a>
          <a href="javascript:void(0)" className="stat ins">
            <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
            <span>{ instanceCount } INSTANCES</span>
          </a>
        </div>
      </div>
      <ul>
        <li><strong>Deployment</strong><span>{ card.appStatus }</span></li>
        <li><strong>Response time</strong><span>{ responseTime }</span></li>
        <li><strong>Service</strong><span>{ serviceName }</span></li>
        <li><strong>Uptime</strong><span>{ card.appUptime }</span></li>
      </ul>
      {
        (() => {
          if (this.state.dirty) {
            return <div className="card-buttons">
              <Button onClick={ () => { this.onCancelChanges() } }>Cancel</Button>
              <Button onClick={ () => { this.onApplyChanges() } }>Apply changes</Button>
            </div>;
          }
        })()
      }
    </article>;
  }

  onAppNameChange(newAppName) {
    this.setState({dirty: {appName: newAppName}});
  }

  onCancelChanges() {
    this.refs.appNameEdit.reset();
    this.setState({dirty: null});
  }

  onApplyChanges() {
    const changedApplication = _.defaultsDeep({}, this.state.dirty, this.props.card);
    this.props.onApplicationChange && this.props.onApplicationChange(changedApplication);
  }
}

export default ApplicationCard;
