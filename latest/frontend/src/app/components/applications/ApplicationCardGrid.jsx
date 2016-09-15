import React from 'react';

import ApplicationCard from './ApplicationCard.jsx';

const AddApplicationCard = (props) => <article>
  <a href="javascript:void(0)" className="add" onClick={ () => { props.onClick && props.onClick() } }>ADD
    APPLICATION</a>
</article>;


export default class ApplicationCardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationToAdd: null
    };
  }

  reset() {
    this.setState({
      applicationToAdd: null
    });
  }

  _renderCards() {
    return (this.props.items || [])
      .map((item) => <ApplicationCard key={item._id}
                                      card={ item }
                                      onApplicationChange={(application) => { this.onApplicationChange(application) }}/>);
  }

  render() {
    console.log(this.props);
    return <section className="add-application">
      {
        (()=> this.state.applicationToAdd ?
          <ApplicationCard key="applicationToAdd"
                           card={ this.state.applicationToAdd }
                           onApplicationChange={(application) => { this.onApplicationChange(application) }}/> :
          <AddApplicationCard onClick={ () => { this.onAddApplication() } }/>)()
      }

      { this._renderCards() }
    </section>;
  }

  onAddApplication() {
    this.setState({applicationToAdd: {}});
  }

  onApplicationChange(application) {
    this.props.onApplicationChange && this.props.onApplicationChange(application);
  }

}
