import React from 'react';
import Header from './common/header/Header.jsx';

export default class Main extends React.Component {
  render() {
    return <div>
      <Header/>
      <div className="main-container">
        { this.props.children }
      </div>
    </div>;
  }
}
