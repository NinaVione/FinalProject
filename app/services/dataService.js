app.factory('dataService', ['$rootScope', '$http', '$localStorage', '$sessionStorage',
  function ($rootScope, $http, $localStorage, $sessionStorage) {
    
    'use strict';

    $rootScope.$storage = $localStorage;
    
    return {
      getJson: function (callback) {
        $http.get('data/users.json')
          .then(function (result) {
            var users = [];
            users = users.concat(result.data);
            callback(users);
          })
          .catch(function (result) {
            console.log('Request failed');
          });
      },

      login: function (username, password, users, callback) {
        var response = {
          success: false
        };
        for(var user in users) {
          if(username == users[user].username && password == users[user].password) {
            response.success = true;
            break;
          }
        }
        if(!response.success) {
            response.message = 'Username or password is incorrect';
        }
        callback(response);
      },

      getPassword: function (username, users) {
        for(var user in users) {
          if(username == users[user].username) {
            return users[user].password;
          }
        }
      },

      isLoggedIn: function () {
        return $rootScope.$storage.user != null;
      },

      setStorage: function () {
        $rootScope.$storage = $localStorage;
      },

      setStorageData: function (dataName, dataContent) {
        $rootScope.$storage[dataName] = dataContent;
        $rootScope.flag = true;
      },

      getStorageData: function () {
        return $rootScope.$storage;
      },

      getStorageDataByField: function (data) {
        return $rootScope.$storage[data];
      },

      removeStorageData: function (data) {
        delete $localStorage[data];
        $rootScope.flag = false;
      }
    }
  }
]);