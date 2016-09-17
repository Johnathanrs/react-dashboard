import React from 'react';

import Button from '../common/button/Button.jsx';

const mockImageUrls = {
  '2': require('../../img/2.png'),
  '3': require('../../img/3.png'),
  'ico_red': require('../../img/ico_red.png'),
  'ico_flag': require('../../img/ico_flag.png'),
  'ico_green': require('../../img/ico_green.png'),
  'ico_s_3': require('../../img/ico_s_3.png'),
  'ico_s_2': require('../../img/ico_s_2.png'),
  'ico_s_1': require('../../img/ico_s_1.png'),
  'ico_close': require('../../img/ico_close.png')
};

const ApplicationType = (props) => <label className="crf">
  <input type="radio" id="crf-input-17" className="crf-i"
         style={ {display: 'none'} }/>
  <img src={ mockImageUrls[props.icon] } alt=""/>
</label>;

const ServiceApplication = (props) => <div className="application">
  <a href="javascript:void(0)"
     className="delete"
     onClick={ () => { props.onDelete() } }><img src={ mockImageUrls['ico_close'] } alt=""/></a>

  <h3>{ props.item.appName }</h3>
  <fieldset>
    <label>Instances</label>
    <input type="number"
           value={ props.item.instanceCount || 0 }
           onChange={ (evt) => { props.onInstanceCountChange(evt.target.value) } }/>
  </fieldset>
  <fieldset>
    <label>Type</label>

    <div className="radios">
      <ApplicationType icon="ico_s_1"/>
      <ApplicationType icon="ico_s_2"/>
      <ApplicationType icon="ico_s_3"/>
      <ApplicationType icon="ico_s_1"/>
      <ApplicationType icon="ico_s_2"/>
      <ApplicationType icon="ico_s_3"/>
    </div>
  </fieldset>
</div>;

class ServiceCreationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: {},
      applications: _.clone(props.applications)
    };
  }

  _renderApplications() {
    return this.state.applications.map((application) =>
      <ServiceApplication key={ `application-${application._id}` }
                          item={ application }
                          onDelete={ () => { this.setState({ applications: _.without(this.state.applications, application) }) } }
                          onInstanceCountChange={ (newValue) => { this.onInstanceCountChange(application, newValue) } } />);
  }

  render() {
    return <div>
      <form action="#">
        <fieldset>
          <label>Service name</label>
          <input type="text"
                 placeholder="Enter name here..."
                 value={ this.state.service.svcName }
                 onChange={ (evt)=> { this.setState({service: _.defaults({srcName: evt.target.value}, this.state.service)}) } }/>
        </fieldset>
        <fieldset>
          <label>Owner</label>
          <input type="text"
                 value={ this.state.service.svcOwner }
                 onChange={ (evt)=> { this.setState({service: _.defaults({srcOwner: evt.target.value}, this.state.service)}) } }/>
        </fieldset>

        { this._renderApplications() }

        <div className="bottom">
          <Button type="add" onClick={ () => { console.log('TODO add application') } }>Applications</Button>

          <div className="right">
            <Button type="grey" onClick={ () => { this.props.onCancel && this.props.onCancel() } }>Cancel</Button>
            <Button onClick={ () => { this.props.onApply && this.props.onApply() } }>Create</Button>
          </div>
        </div>
      </form>
    </div>;
  }

  onInstanceCountChange(applicationBeingChanged, newInstanceCount) {
    if (newInstanceCount < 0) {
      return;
    }
    this.setState({applications: _.map(this.state.applications, (application) => {
      if (application === applicationBeingChanged) {
        return _.defaults({instanceCount: newInstanceCount}, application);
      } else {
        return application;
      }
    })});
  }
}

export default ServiceCreationModal;
