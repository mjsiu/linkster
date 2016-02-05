var Store = require('flux/utils').Store;
var LinkConstants = require('../constants/link_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var LinkStore = new Store(AppDispatcher);

var _links = [];

var resetListings = function(links) {
  _links = links;
};

LinkStore.all = function(links) {
  return _links.slice(0);
};

LinkStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case LinkConstants.LISTINGS_RECEIVED:
    resetListings(payload.links);
    LinkStore.__emitChange();
    break;
  }
};

module.exports = LinkStore;
