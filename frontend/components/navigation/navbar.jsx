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
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a onClick={this.handleHomeClick}>Linkster</a></li>
            <li><a onClick={this.handleCreateClick}>Create Link List <span className="sr-only">(current)</span></a></li>
            <li><a onClick={this.handleSearchClick}>Explore</a></li>
          </ul>
          <Login history={this.props.history}/>

        </div>
        <div className="banner">
          <h1 className="banner-title">Linkster</h1>
        </div>
          </div>
    </nav>

    </div>

    );
  }
});

module.exports =  NavBar;
