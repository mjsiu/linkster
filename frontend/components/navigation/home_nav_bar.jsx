var React = require('react');

var HomeNavBar = React.createClass({

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
        <nav className="navbar navbar-default home">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a onClick={this.handleSearchClick}>Featured</a></li>
                <li><a onClick={this.handleSearchClick}>General CS</a></li>
                <li><a onClick={this.handleSearchClick}>Algorithms & Datastructures</a></li>
                <li><a onClick={this.handleSearchClick}>Javascript</a></li>
                <li><a onClick={this.handleSearchClick}>Ruby on Rails</a></li>
                <li><a onClick={this.handleSearchClick}>SQL</a></li>
                <li><a onClick={this.handleSearchClick}>Dev Tools</a></li>
                <li><a onClick={this.handleSearchClick}>More</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports =  HomeNavBar;
