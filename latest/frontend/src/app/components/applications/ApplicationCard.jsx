import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import moment from 'moment';

import Button from '../common/button/Button.jsx';
import EditInPlace from '../common/edit/EditInPlace.jsx';
import CloseRedButton from '../common/button/CloseRedButton.jsx';

import settings from '../../app.settings.dev';

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
      dirty: null,
      status: 'undefined',
      numberOfIstances: 0,
      uptime: 'undefined'
    };
  }

  _fetchNumberOfInstances(appName) {
    $.get(settings.apiBase + `/application/${appName}/count`).then((result) => {
      this.setState({numberOfIstances: result.numberOfIstances});
    });
  }

  _fetchStatus(appName) {
    $.get(settings.apiBase + `/application/${appName}/status`).then((result) => {
      this.setState({status: result});
    });
  }

  _fetchUptime(appName) {
    $.get(settings.apiBase + `/application/${appName}/uptime`).then((result) => {
      console.log('uiiuiuiuiui', result.version)
      var version = moment(result.version);
      var duration = moment.duration(moment().diff(version));
      var days = parseInt(duration.asDays());
      var hours = parseInt(duration.asHours());
      var hours = hours - days*24;

      console.log(days);
      this.setState({uptime: `${days} days & ${hours} hours`});
    });
  }

  _fetchData() {
    this._fetchNumberOfInstances(this.props.card.appName);
    this._fetchStatus(this.props.card.appName);
    this._fetchUptime(this.props.card.appName);
  }

  componentWillMount() {
    this._fetchData();
  }

  render() {
    // TODO render real data
    const card = this.props.card;
    const appId = card._id;
    //const errorCount = 0;
    const responseTime = '12 sec';
    const classes = {
      dirty: !!this.state.dirty
    };
    var className = classNames(classes);
    if(this.props.selectedAppId === appId)
      className += ' active';

    return <article className={ className } onClick={ () => { this.props.onSelectApplication(appId) } } >
      <div className="delete-app-btn">
        <CloseRedButton onClick={ () => { this.props.onApplicationNeedsDeleting(card) } } />
      </div>
      <div className="head">
        <img src={ mockImageUrls['1'] } alt=""/>
        <h4><EditInPlace ref="appNameEdit"
                         value={ card.appName }
                         placeholder="Please click here to enter the name"
                         block={ true }
                         onChange={ (newValue) => { this.onAppNameChange(newValue) } }/></h4>

        <div className="tags">
          <div href="#" className="stat">
            <img src={ mockImageUrls['ico_flag'] } width="12" alt=""/>
            <span>{ card.errorCount ? card.errorCount : 0 } ERRORS</span>
          </div>
          <div href="javascript:void(0)" className="stat ins">
            <img src={ mockImageUrls['ico_green'] } width="13" alt=""/>
            <span><EditInPlace value={ this.state.numberOfIstances }
                               decorator={ (value) => ( value ? value : 0 ) + ' INSTANCES' }
                               styles={ {width: '60px'} }
                               onApply={ (value) => { this.onAppInstanceCountChange(value) } }/> </span>
          </div>
        </div>
      </div>
      <ul>
        <li><strong>Image</strong><span>{ card.appImage ? card.appImage : '' }</span></li>
        <li><strong>Exec</strong><span>{ card.appExec }</span></li>
        <li><strong>Uptime</strong><span>{ this.state.uptime }</span></li>
        <li><strong>Status</strong><span>{ this.state.status }</span></li>
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
    const dirtyData = this.state.dirty;
    const newDirtyData = dirtyData ? _.defaults({appName: newAppName}, dirtyData) : {appName: newAppName};
    this.setState({dirty: newDirtyData});
  }

  onAppInstanceCountChange(newInstanceCount) {
    const dirtyData = this.state.dirty;
    const newDirtyData = dirtyData ? _.defaults({appInstanceCount: newInstanceCount}, dirtyData) : {appInstanceCount: newInstanceCount};
    this.setState({dirty: newDirtyData});
  }

  onCancelChanges() {
    this.refs.appNameEdit.reset();
    this.setState({dirty: null});
    this.props.onCancelChanges && this.props.onCancelChanges();
  }

  onApplyChanges() {
    const changedApplication = _.defaultsDeep({}, this.state.dirty, { _id: this.props.card._id });
    this.props.onApplyChanges && this.props.onApplyChanges(changedApplication);
  }
}

export default ApplicationCard;
