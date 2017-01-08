'use strict';

import React from 'react';

require('styles/MessageCell.css');
var FixedDataTable = require('fixed-data-table');
const {Cell} = FixedDataTable;

class MessageCellComponent extends React.Component {
      constructor(props) {
          super(props);
          var {rowIndex, data, col, ...props} = props;
          const _text = data[rowIndex][col];
          this.state = {
              textField: _text,
              isRead: false,
              isTranscribed: false
          };
      }
    handleMouse = () => {
        if (!this.state.isRead) {
            const origText = this.state['textField'];
            this.setState({textField: 'Move - ' + origText,
                        isRead: true});
        }
    }
      handleClick = () => {
          if (!this.state.isTranscribed) {
            const origText = this.state['textField'];
            this.setState({textField: 'HELLO - ' + origText,
                        isTranscribed: true});
          }
      }
      render() {
          return (
            <Cell onClick={this.handleClick}
              onMouseEnter={this.handleMouse}>
                  {this.state['textField']}
            </Cell>
          );
      }
}

MessageCellComponent.displayName = 'MessageCellComponent';

// Uncomment properties you need
// MessageCellComponent.propTypes = {};
// MessageCellComponent.defaultProps = {};

module.exports = MessageCellComponent;
