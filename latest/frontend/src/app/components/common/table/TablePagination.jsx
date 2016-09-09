import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

// TODO add className="current" to the current item

const renderPaginationItems = (pageCount, currentPage) => {
  return _.range(0, pageCount).map((pageIndex) => <li className={classNames({current: pageIndex === currentPage})} key={pageIndex}><a href="#">{pageIndex+1}</a></li>);
};

const TablePagination = (props) => <ul className="pagination">
  { renderPaginationItems(props.pageCount, props.currentPage) }
</ul>;

export default TablePagination;
