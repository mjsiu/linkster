var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/sessionConstants.js');
var ApiUtil = require('../util/apiUtil.js');

var SessionActions = {

  signUp: function(userInfo){
    ApiUtil.createUserAccount(userInfo, this.receiveNewUser);
  },

  logIn: function(credentials) {
    ApiUtil.createSession(credentials, this.receiveCurrentUser)
  },

  logOut: function() {
    ApiUtil.destroySession(this.removeCurrentUser);
  },

  fetchSession: function() {
    ApiUtil.fetchSession(this.receiveCurrentUser);
  },

// ============= Callbacks =============== //

  receiveNewUser: function(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVENEWUSER,
      user: user
    });
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVEUSER,
      user: user
    });
  },

  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: SessionConstants.REMOVECURRENTUSER
    });
  }

};

module.exports = SessionActions;
