var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var ApiUtil = require('../util/apiUtil.js');

var UserActions = {

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
      actionType: UserConstants.RECEIVENEWUSER,
      user: user
    });
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVEUSER,
      user: user
    });
  },

  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: UserConstants.REMOVECURRENTUSER,
      user: ""
    });
  }

};

module.exports = UserActions;
