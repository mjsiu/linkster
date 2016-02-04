var React = require('react');
var Login = require('./login');

var NavBar = React.createClass({

  handleHomeClick: function () {
  this.props.history.pushState(null, "/");
  },

  handleCreateClick: function () {
    this.props.history.pushState(null, "listings/new");
  },

  handleSearchClick: function() {
    this.props.history.pushState(null, "listings/search");
  },

  render: function() {

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <Login history={this.props.history}/>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports =  NavBar;
