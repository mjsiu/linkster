var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/api_utils'),
    Error = require('../shared/error');

var LinkListForm = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function(){
      return {
        id: "",
        title: "",
        description: "",
        price: "",
        address: "",
        city_id: "",
        category_id: "",
        latitude: "",
        longitude: "",
        images_attributes: []
      };
    },

    render: function() {
      return (
        <div/>
      )
    }
});

module.exports = LinkListForm;
