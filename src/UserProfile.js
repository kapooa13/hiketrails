
var UserProfile = (function() {

  var getName = function() {
    return localStorage.getItem('name');
  };

  var setName = function(name) {
    localStorage.setItem('name', name);
  };

  var getUserId = function() {
    return localStorage.getItem('userId');
  };

  var setUserId= function(userId) {
    localStorage.setItem('userId', userId);
  };

  var getLoggedIn = function() {
    let value = localStorage.getItem('loggedIn');
    if (value !== null) {
      return value;
    } else {
      return false;
    }
  };

  var setLoggedIn = function(loggedIn) {
    localStorage.setItem('loggedIn', loggedIn);
  };

  var logout = function() {
    localStorage.clear();
  };

  return {
    getName: getName,
    setName: setName,
    getUserId: getUserId,
    setUserId: setUserId,
    getLoggedIn: getLoggedIn,
    setLoggedIn: setLoggedIn,
    logout: logout
  }

})();

export default UserProfile;