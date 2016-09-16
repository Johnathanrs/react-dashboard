import _ from 'lodash';
import React from 'react';

import TablePagination from './TablePagination.jsx';
import TableColumn from './TableColumn.jsx';
import FirstExtraRow from './FirstExtraRow.jsx';
import LastExtraRow from './LastExtraRow.jsx';
import DetailsExtraRow from './DetailsExtraRow.jsx';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  _columns() {
    return _.filter(this.props.children, (child) => child.type === TableColumn);
  }

  _firstExtraRow() {
    return _.find(this.props.children, (child) => child.type === FirstExtraRow);
  }

  _lastExtraRow() {
    return _.find(this.props.children, (child) => child.type === LastExtraRow);
  }

  _detailsExtraRow() {
    return _.find(this.props.children, (child) => child.type === DetailsExtraRow);
  }

  _renderHeadCells() {
    return this._columns().map((column, index) => <th key={'column' + index} className={column.props.classes}>
      {column.props.title}
    </th>);
  }

  _renderFirstExtraRow() {
    const firstExtraRow = this._firstExtraRow();
    if (firstExtraRow) {
      return <tr key="first-extra-row">{ firstExtraRow.props.children }</tr>
    }
  }

  _renderLastExtraRow() {
    const lastExtraRow = this._lastExtraRow();
    if (lastExtraRow) {
      return <tr key="last-extra-row">{ lastExtraRow.props.children }</tr>
    }
  }

  _renderBodyRows() {
    const detailsExtraRow = this._detailsExtraRow();
    let rows = [];
    this._currentPageDataItems().forEach((dataItem, dataItemIndex) => {
      const cellValue = (getter) => {
        if (!getter) {
          return '';
        } else if (_.isFunction(getter)) {
          return getter(dataItem, dataItemIndex);
        } else {
          return dataItem[getter];
        }
      };
      const cell = (column, index) => {
        return <td key={`row-${dataItemIndex}-${index}`} className={column.props.classes}>
          { cellValue(column.props.getter) }
        </td>
      };
      const rowCells = () => this._columns().map((column, index) => cell(column, index));
      rows.push(<tr key={`row-${dataItemIndex}`}>{ rowCells() }</tr>);
      if (detailsExtraRow) {
        if (_.get(detailsExtraRow, 'props.children.type')) {
          const rowContent = React.cloneElement(detailsExtraRow.props.children, {
            item: dataItem,
            itemIndex: dataItemIndex
          });
          rows.push(<tr key={`row-details-${dataItemIndex}`} className="details-extra-row">{ rowContent }</tr>)
        } else {
          console.warn('DetailsExtraRow must have exactly one child and the child must be React Component');
        }
      }
    });
    return rows;
  }

  _currentPage() {
    return this.state.currentPage || 0;
  }

  _dataItems() {
    return this.props.items || [];
  }

  _pageCount() {
    return Math.ceil(this._dataItems().length / this.props.pageSize);
  }

  _currentPageDataItems() {
    const allItems = this._dataItems();
    const currentPage = this._currentPage();
    const pageSize = this.props.pageSize;
    const startIndex = pageSize * currentPage;
    return allItems.slice(startIndex, startIndex + pageSize);
  }

  _setCurrentPage(pageIndex) {
    this.setState({
      currentPage: pageIndex
    });
  }

  render() {
    return <div className="table">
      <table>
        <thead>
        <tr>
          { this._renderHeadCells() }
        </tr>
        </thead>
        <tbody>
        { this._renderFirstExtraRow() }
        { this._renderBodyRows() }
        </tbody>
      </table>
      <TablePagination pageCount={this._pageCount()}
                       currentPage={this._currentPage()}
                       onPageClicked={ (pageIndex) => { this._setCurrentPage(pageIndex) } }/>
    </div>;
  }
}

Table.defaultProps = {
  pageSize: 5
};
