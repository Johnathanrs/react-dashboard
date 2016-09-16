import React from 'react';

const mockImageUrls = {
  '2': require('../../img/2.png'),
  '3': require('../../img/3.png'),
  'ico_red': require('../../img/ico_red.png'),
  'ico_flag': require('../../img/ico_flag.png'),
  'ico_green': require('../../img/ico_green.png'),
  'ico_s_3': require('../../img/ico_s_3.png'),
  'ico_s_2': require('../../img/ico_s_2.png'),
  'ico_s_1': require('../../img/ico_s_1.png')
};

const AddServiceModal = () => <div>
  <form action="#">
    <fieldset>
      <label>Service name</label>
      <input type="text" placeholder="Enter name here..."/>
    </fieldset>
    <fieldset>
      <label>Owner</label>
      <input type="text" value={ 'Clera Hein' }/>
    </fieldset>

    <div className="application">
      <a href="#" className="delete"><img src={ mockImageUrls['ico_close'] } alt=""/></a>

      <h3>evo-cassandra-seed</h3>
      <fieldset>
        <label>Instances</label>
        <input type="number" value={ 1 }/>
      </fieldset>
      <fieldset>
        <label>Type</label>

        <div className="radios">
          <input type="radio" name="set-1" id="crf-input-17" className="crf-i"
                 style={ {display: 'none'} }/>
          <label className="crf" htmlFor="crf-input-17"><img src={ mockImageUrls['ico_s_1'] } alt=""/></label>
          <input type="radio" name="set-1" id="crf-input-18" className="crf-i"
                 style={ {display: 'none'} }/>
          <label className="crf" htmlFor="crf-input-18"><img src={ mockImageUrls['ico_s_2'] } alt=""/></label>
          <input type="radio" name="set-1" id="crf-input-19" className="crf-i"
                 style={ {display: 'none'} }/>
          <label className="crf" htmlFor="crf-input-19"><img src={ mockImageUrls['ico_s_3'] } alt=""/></label>
          <input type="radio" name="set-1" id="crf-input-20" className="crf-i"
                 style={ {display: 'none'} }/>
          <label className="crf" htmlFor="crf-input-20"><img src={ mockImageUrls['ico_s_1'] } alt=""/></label>
          <input type="radio" name="set-1" id="crf-input-21" className="crf-i"
                 style={ {display: 'none'} }/>
          <label className="crf" htmlFor="crf-input-21"><img src={ mockImageUrls['ico_s_2'] } alt=""/></label>
          <input type="radio" name="set-1" id="crf-input-22" className="crf-i"
                 style={ {display: 'none'} }/>
          <label className="crf" htmlFor="crf-input-22"><img src={ mockImageUrls['ico_s_3'] } alt=""/></label>
        </div>
      </fieldset>
    </div>

    <div className="bottom">
      <a href="#" className="btn btn-add">Applications</a>

      <div className="right">
        <button type="submit" className="btn btn-grey close">Cancel</button>
        <button type="submit" className="btn btn-blue">Create</button>
      </div>
    </div>
  </form>
</div>;

export default AddServiceModal;
