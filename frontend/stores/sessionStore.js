var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/sessionConstants.js');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {};

var receiveUser = function(user) {
  _currentUser = user;
};

var removeUser = function() {
  _currentUser = {};
};

SessionStore.all = function () {
  return _currentUser;
};

SessionStore.hasCurrentUser = function() {
  return Object.keys(_currentUser).length > 0;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.RECEIVENEWUSER:
      receiveUser(payload.user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.RECEIVEUSER:
      receiveUser(payload.user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.REMOVECURRENTUSER:
      removeUser();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
