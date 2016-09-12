// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('tournament', {
    url: '/tournament',
    views: {
      '': {
        templateUrl: 'templates/tournament.html',
		controller: 'TournamentCtrl'
      }
    }
  })
  .state('discipline', {
      url: '/discipline',
      views: {
        '': {
          templateUrl: 'templates/discipline.html',
		  controller: 'DisciplineCtrl'
        }
      }
  })
  .state('schedule', {
	url: '/schedule/:id_tournament',
	views: {
		'': {
			templateUrl: 'templates/schedule.html',
			controller: 'ScheduleCtrl'
	  }
    }

    .state('connexion', {
      url: '/signin',
      views: {
        '': {
          templateUrl: 'templates/login.html',
          controller: 'ConnexionCtrl'
        }
      }
    })


    .state('inscription', {
      url: '/signup',
      views: {
        '': {
          templateUrl: 'templates/inscription.html',
          controller: 'InscriptionCtrl'
        }
      }
    })


  });




  $urlRouterProvider.otherwise('/signin');
});*/

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('connexion', {
      url: '/signin',
      views: {
        '': {
          templateUrl: 'templates/login.html',
          controller: 'ConnexionCtrl'
        }
      }
    })

    .state('app.tournament', {
      url: '/tournament',
      views: {
        'menuContent': {
          templateUrl: 'templates/tournament.html',
          controller: 'TournamentCtrl'
        }
      }
    })
    .state('app.discipline', {
      url: '/discipline',
      views: {
        'menuContent': {
          templateUrl: 'templates/discipline.html',
          controller: 'DisciplineCtrl'
        }
      }
    })
    .state('app.schedule', {
      url: '/schedule/:id_tournament',
      views: {
        'menuContent': {
          templateUrl: 'templates/schedule.html',
          controller: 'ScheduleCtrl'
        }
      }
    })
    .state('app.participants', {
      url: '/tournament/{id}/paticipants',
      views: {
        '': {
          templateUrl: 'templates/participants.html',
          controller: 'ParticipantCtrl'
        }
      }
    })

    .state('InscriptionCtrl', {
      url: '/signup',
      views: {
        '': {
          templateUrl: 'templates/inscription.html',
          controller: 'InscriptionCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/discipline');

});



