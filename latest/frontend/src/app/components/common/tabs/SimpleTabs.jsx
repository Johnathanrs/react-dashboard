import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

const itemTitle = (item) => _.isObject(item) ? item.title : item;
const itemValue = (item) => _.isObject(item) ? item.value : _.camelCase(item);

// TODO handle current CSS class
const renderItems = (items, onItemClicked) => items.map((item, index) => <li key={index} className={classNames({current: false})}>
  <a href="javascript:void(0)" onClick={ () => { onItemClicked(itemValue(item))} }>{ itemTitle(item) }</a>
</li>);

const SimpleTabs = (props) => <div className="tabs">
  <ul>
    { renderItems(props.items, props.onItemClicked || function(){}) }
  </ul>
  <div className="right">
    { props.children }
  </div>
</div>;

export default SimpleTabs;
