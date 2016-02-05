var ApiUtil = {

  createNewListing: function(listing, callback){
      $.ajax({
        url: "api/listings",
        method: "POST",
        data: { listing: listing },
        success: function (listing) {
          callback();
        },
        error: function(error) {
          ApiActions.formError(error);
        }
      });
    },

    deleteListing: function (listing) {
      $.ajax({
        url: "api/listings/" + listing.id,
        method: "DELETE",
        data: { listing: listing },
        success: function (listing) {
          ApiActions.receiveDeletedListing(listing);
        }
      });
    },

    editListing: function (listing) {
      $.ajax({
        url: "api/listings/" + listing.id,
        method: "PATCH",
        data: { listing: listing }
      });
    },

};

module.exports = ApiUtil;
