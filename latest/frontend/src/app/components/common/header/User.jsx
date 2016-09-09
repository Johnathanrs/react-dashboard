import React from 'react';

export default class User extends React.Component {
  render() {
    return <div className="user">
      <a href="#"><img src="img/1.png" alt=""/><span className="name">Tiffany Bradley</span></a>
      <a href="#" className="down"></a>
    </div>;
  }
}
