var React = require('react');
var HomeNavBar = require('./home_nav_bar');

var Index = React.createClass({

  render: function() {

  return (
    <div>
    <HomeNavBar/>
    <div className="home-body"/>

    </div>
  )
  }
});

module.exports = Index;
