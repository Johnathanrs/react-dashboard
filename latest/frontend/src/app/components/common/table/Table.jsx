import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';

import TablePagination from './TablePagination.jsx';
import TableColumn from './TableColumn.jsx';
import FirstExtraRow from './FirstExtraRow.jsx';
import LastExtraRow from './LastExtraRow.jsx';
import DetailsExtraRow from './DetailsExtraRow.jsx';
import CheckBox from '../checkbox/CheckBox.jsx';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      itemStates: _.map(props.items, () => ({}))
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
    const headCells = this._columns().map((column, index) => <th key={'column' + index} className={column.props.classes}>
      {column.props.title}
    </th>);
    const selectionHeadCell = () => <th key="column-selection" className="row-selection-cell">
      <CheckBox onChange={ (newValue) => { this.selectAll(newValue) } }/>
    </th>;
    return this.props.supportsSelection ? [selectionHeadCell()].concat(headCells) : headCells;
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
      const dataRowCells = () => this._columns().map((column, index) => cell(column, index));
      const selectionRowCell = () => <td className="row-selection-cell" key={`row-selection-${dataItemIndex}`}>
        <CheckBox value={ this.state.itemStates[dataItemIndex].selected }
                  onChange={ (newValue) => { this.state.itemStates[dataItemIndex].selected = newValue } }/>
      </td>;
      const allRowCells = this.props.supportsSelection ? [selectionRowCell()].concat(dataRowCells()) : dataRowCells();
      rows.push(<tr key={`row-${dataItemIndex}`}>{ allRowCells }</tr>);
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      itemStates: _.map(nextProps.items, () => ({}))
    });
  }

  render() {
    let classes = _.isString(this.props.classes) ? {} : {table: true};
    _.each(_.filter((this.props.classes || '').split(/\s/)), (cls) => { classes[cls] = true });
    return <div className="table" className={classNames(classes)}>
      <table>
        <thead>
        <tr>
          { this._renderHeadCells() }
        </tr>
        </thead>
        <tbody>
        { this._renderFirstExtraRow() }
        { this._renderBodyRows() }
        { this._renderLastExtraRow() }
        </tbody>
      </table>
      <TablePagination pageCount={this._pageCount()}
                       currentPage={this._currentPage()}
                       onPageClicked={ (pageIndex) => { this._setCurrentPage(pageIndex) } }/>
    </div>;
  }

  selectAll(selected) {
    this.setState({
      itemStates: _.map(this.state.itemStates, (itemState) => _.defaults({selected: selected}, itemState))
    });
  }

  selectedItems() {
    return _.filter(this.props.items, (item, itemIndex) => this.state.itemStates[itemIndex].selected );
  }
}

Table.defaultProps = {
  pageSize: 5
};
