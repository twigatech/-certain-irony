/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import MessageTableComponent from 'components//MessageTableComponent.js';

describe('MessageTableComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(MessageTableComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('messagetable-component');
  });
});
