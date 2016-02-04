var React = require('react');
var SessionActions = require('../../actions/sessionAction.js');

var UserLoginForm = React.createClass({

    getInitialState: function() {
      return ({
        username: "",
        password: ""
      });
    },

    handleSubmit: function(e) {
      e.preventDefault();
      // this.props.closeModal();
      SessionActions.logIn({
        username: this.state.username,
        password: this.state.password
      });
    },

    render: function() {
      return (
        <form action="demo_form.asp">
          First name: <input type="text" name="fname"><br>
          Last name: <input type="text" name="lname"><br>
          <input type="submit" value="Submit">
        </form>
      )
    }

});
