var React = require('react');
var HomeNavBar = require('./homeNavBar');

var Index = React.createClass({

  render: function() {

  return (
    <div>
    <div className="banner">
      <h1 className="banner-title">Linkster</h1>
    </div>
    <HomeNavBar/>
    <div className="home-body"/>
    </div>
  )
  }
});

module.exports = Index;
