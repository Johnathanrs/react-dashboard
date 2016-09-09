import _ from 'lodash';
import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  _columns() {
    return this.props.children || [];
  }

  _renderHeadCells() {
    return this._columns().map((column, index) => <th key={'column' + index} className={column.props.classes}>
      {column.props.title}
    </th>);
  }

  _renderBodyRows() {
    return this._currentPageDataItems().map((dataItem, dataItemIndex) => {
      let cellValue = (getter) => {
        if (!getter) {
          return '';
        } else if (_.isFunction(getter)) {
          return getter(dataItem, dataItemIndex);
        } else {
          return dataItem[getter];
        }
      };
      let cell = (column, index) => {
        return <td key={`row-${dataItemIndex}-${index}`} className={column.props.classes}>
          { cellValue(column.props.getter) }
        </td>
      };
      let rowCells = () => this._columns().map((column, index) => cell(column, index));
      return <tr key={`row-${dataItemIndex}`}>{ rowCells() }</tr>;
    });
  }

  _currentPage() {
    return this.state.currentPage || 0;
  }

  _dataItems() {
    return this.props.items || [];
  }

  _currentPageDataItems() {
    const allItems = this._dataItems();
    const currentPage = this._currentPage();
    const pageSize = this.props.pageSize;
    const startIndex = pageSize * currentPage;
    return allItems.slice(startIndex, pageSize);
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
        { this._renderBodyRows() }
        </tbody>
      </table>
      <ul className="pagination">
        <li className="current"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
      </ul>
    </div>;
  }
}

Table.defaultProps = {
  pageSize: 25
};
