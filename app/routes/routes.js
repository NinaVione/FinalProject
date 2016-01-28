app.config(['$stateProvider', '$urlRouterProvider', 
  function ($stateProvider, $urlRouterProvider) {

  'use strict';

  $urlRouterProvider.otherwise('/login');

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'app/templates/login.html',
      controller: 'loginController'
    })

    .state('home', {
      url: '/home',
      templateUrl: 'app/templates/home.html',
      resolve: {
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 3000);
          return delay.promise;
        }
      }
    })

    .state('forgor_password', {
      url: '/forgot_password',
      templateUrl: 'app/templates/forgotPassword.html',
    })
  }
]);

app.run(['$rootScope', '$state', 'dataService',
  function ($rootScope, $state, dataService) {

    'use strict';

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (fromState.name == 'login' && toState.name == "home" && !dataService.isLoggedIn()) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }
]);
