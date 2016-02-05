var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../../util/api_utils'),
    Error = require('./error');

var LinkForm = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function(){
      return {
        title: "",
        url: "",
        description: ""
      };
    },

    render: function() {
      return (
        <div/>
      )
    }
});

module.exports = LinkForm;
