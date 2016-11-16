import React from 'react';

import ServiceCard from './ServiceCard.jsx';
import ServiceCardApplications from './ServiceCardApplications.jsx';

export default class ServiceCardGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderCards() {
    return (this.props.items || []).map((item) => <div key={item._id}>
      <ServiceCard card={ item } data={this.props.data}/>
      <ServiceCardApplications />
    </div>);
  }

  render() {
    return <section>
      { this._renderCards() }
    </section>;
  }
}
