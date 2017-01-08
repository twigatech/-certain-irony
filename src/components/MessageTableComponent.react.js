'use strict';
import React from 'react';

var FixedDataTable = require('fixed-data-table');
let MessageCellComponent = require('../components/MessageCellComponent.react');
const {Table, Column, Cell} = FixedDataTable;

require('styles/MessageTable.css');
require('fixed-data-table/dist/fixed-data-table.css');

class TextCell extends React.Component {
    render() {
        var {rowIndex, data, col, ...props} = this.props;
        return (
            <Cell {...props}>
                {data[rowIndex][col]}
            </Cell>
        );
    }
}

class MessageTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this._dataList = [
            {column_1: '1_1   Boop', column_2: '2_1', column_3: '3_1'},
            {column_1: '1_2   Boop', column_2: '2_2', column_3: '3_2'},
            {column_1: '1_3   Boop', column_2: '2_3', column_3: '3_3'},
            {column_1: '1_4   Boop', column_2: '2_4', column_3: '3_4'},
            {column_1: '1_5   Boop', column_2: '2_5', column_3: '3_5'},
            {column_1: '1_6   Boop', column_2: '2_6', column_3: '3_6'}
        ];
        this.state = {
            filteredDataList: this._dataList,
            columnWidths: {
                column_1: 200,
                column_2: 200,
                column_3: 200
            }
        };
        this._onColumnResizeEndCallback = this._onColumnResizeEndCallback.bind(this);
    }

    _onColumnResizeEndCallback(newColumnWidth, columnKey) {
        this.setState(({columnWidths}) => ({
            columnWidths: {
                ...columnWidths,
                [columnKey]: newColumnWidth
            }
        }));
    }

  render() {
      var {filteredDataList, columnWidths} = this.state;
    return (
      <div>
        <Table
          headerHeight={50}
          height={500}
          isColumnResizing={false}
          onColumnResizeEndCallback = {this._onColumnResizeEndCallback}
          rowHeight={50}
          rowsCount={filteredDataList.length}
          width={900}
          {...this.props}>
          <Column
            cell={<MessageCellComponent data={filteredDataList} col="column_1" columnKey="column_1" />}
            columnKey='column_1'
            fixed={true}
            header={<Cell>Column 1</Cell>}
            isResizable={true}
            width={columnWidths.column_1}
          />
          <Column
            cell={<TextCell data={filteredDataList} col="column_2" columnKey="column_2" />}
            columnKey='column_2'
            fixed={true}
            header={<Cell>Column 2</Cell>}
            isResizable={true}
            width={columnWidths.column_2}
          />
          <Column
            cell={<TextCell data={filteredDataList} col="column_3" columnKey="column_3" />}
            columnKey='column_3'
            fixed={true}
            header={<Cell>Column 3</Cell>}
            isResizable={true}
            width={columnWidths.column_3}
          />
        </Table>
      </div>
    );
  }
}

module.exports = MessageTableComponent;
