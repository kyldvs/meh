/**
 * @providesModule Client
 */
'use strict';

var React = require('React');

var App = React.createClass({
  render(): ?$jsx {
    return (
      <div>
        Testing
      </div>
    );
  },
});

React.render(<App />, document.body);
