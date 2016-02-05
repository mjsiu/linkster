var Store = require('flux/utils').Store;
var LinkListConstants = require('../constants/link_list_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var LinkListStore = new Store(AppDispatcher);

var _linkLists = [];

var resetListings = function(linkLists) {
  _linkLists = linkLists;
};

LinkListStore.all = function(linkLists) {
  return _linkLists.slice(0);
};

LinkListStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case ListingConstants.LISTINGS_RECEIVED:
    resetListings(payload.linkLists);
    LinkListStore.__emitChange();
    break;
  }
};

module.exports = LinkListStore;
