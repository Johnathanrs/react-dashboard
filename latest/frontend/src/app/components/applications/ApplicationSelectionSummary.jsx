import React from 'react';

const imageUrls = {
  close: require('../../img/ico_close.png')
};

const ApplicationSelectionSummary = () => <div className="options">
  <p>Select your service applications below:</p>

  <div className="right">
    <span className="selected"><span className="count">0</span> Applications selected</span>
    <a href="#" className="btn btn-blue">Create</a>
    <a href="#" className="close"><img src={ imageUrls.close } alt=""/></a>
  </div>
</div>;

export default ApplicationSelectionSummary;
