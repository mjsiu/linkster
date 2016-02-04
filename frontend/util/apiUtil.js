var ApiUtil = {
  createUserAccount: function(credentials, receiveNewUser) {
    $.ajax({
      url: 'api/users',
      method: "post",
      data: {user: credentials},
      success: function(user){
                receiveNewUser(user);
              },
      error: function(error, status){
                debugger;
                // console.log(status)
              }
    });
  },

  createSession: function(credentials, receiveCurrentUser) {
    $.ajax({
      url: 'api/session',
      method: "post",
      data: {user: credentials},
      success: function(user) {
                receiveCurrentUser(user);
              },
      error: function(error, status) {
                debugger;
                // console.log(status);
              }
    });
  },
};

module.exports = ApiUtil;
