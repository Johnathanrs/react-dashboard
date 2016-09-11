import React from 'react';

import ApplicationCard from './ApplicationCard.jsx';

const AddApplicationCard = () => <article>
  <a href="#" className="add">ADD APPLICATION</a>
</article>;


export default class ApplicationCardGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderCards() {
    return (this.props.items || []).map((item) => <ApplicationCard key={item._id} card={ item } />);
  }

  render() {
    return <section className="add-aplication">
      <AddApplicationCard />
      { this._renderCards() }
    </section>;
  }
}
