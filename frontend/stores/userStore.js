var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

var UserStore = new Store(AppDispatcher);

var _current_user = {};

var receiveUser = function(user) {
  _currentUser = user;
};

var removeUser = function() {
  _currentUser = {};
};

UserStore.all = function () {
  return _currentUser;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVENEWUSER:
      receiveUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVEUSER:
      receiveUser(payload.user);
      UserStore.__emitChange();
      break;
    case UserConstants.REMOVECURRENTUSER:
      removeUser();
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
