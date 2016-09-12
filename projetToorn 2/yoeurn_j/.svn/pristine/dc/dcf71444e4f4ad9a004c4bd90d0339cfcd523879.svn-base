var starterApp = angular.module('starter.controllers', []);
var url_path = "http://localhost:3000";

starterApp.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.logout = function() {
    $location.path('/signin');
  }


});


starterApp.controller('TournamentCtrl', function($scope, $http, $ionicLoading){

  $ionicLoading.hide();
	$http({
		method: 'GET',
		url: 'https://api.toornament.com/v1/tournaments?api_key=qwx4d8q14REjWzzM3GDExGOks5Eaj1vSg6Fdl9MaN5c'
	}).success(function(data, status, headers, config){
		angular.forEach(data, function(value, key){
			var discipline = $http.get('https://api.toornament.com/v1/disciplines/' + value.discipline + '?api_key=qwx4d8q14REjWzzM3GDExGOks5Eaj1vSg6Fdl9MaN5c');
			discipline.success(function(data, status, headers, config){
				value.discipline = data.name;
			});
			discipline.error(function(data, status, headers, config){
				return status;
			});
		});
		$scope.collection = data;
	}).error(function(data, status, headers, config){
	});
});
starterApp.controller('ParticipantCtrl', function($scope, $http, $ionicLoading, $stateParams){
  $ionicLoading.hide();

  $http({
    method: 'GET',
    url: 'https://api.toornament.com/v1/tournaments/'+$stateParams.id+'/participants?api_key=qwx4d8q14REjWzzM3GDExGOks5Eaj1vSg6Fdl9MaN5c'
  }).success(function(data, status, headers, config){
/*    angular.forEach(data, function(value, key){
      var participant = $http.get('https://api.toornament.com/v1/participant/' + value.participant + '?api_key=qwx4d8q14REjWzzM3GDExGOks5Eaj1vSg6Fdl9MaN5c');
      participants.success(function(data, status, headers, config){
        value.participant = data.name;
      });
      discipline.error(function(data, status, headers, config){
        return status;
      });
    });*/
    $scope.collection = data;
  }).error(function(data, status, headers, config){
  });
});

starterApp.controller('DisciplineCtrl', function($scope, $http){
	var discipline = $http.get('https://api.toornament.com/v1/disciplines?api_key=qwx4d8q14REjWzzM3GDExGOks5Eaj1vSg6Fdl9MaN5c');
	discipline.success(function(data, status, headers, config){
		$scope.discipline = data;
	});
	discipline.error(function(data, status, headers, config){
		return status;
	});
});






starterApp.controller('ScheduleCtrl', function($scope, $http, $routeParams){
	//alert($routeParams);
	alert($stateParams);
	var schedule = $http.get('https://api.toornament.com/v1/tournaments/' +$routeParams.id_tournament+ '/schedules?api_key=qwx4d8q14REjWzzM3GDExGOks5Eaj1vSg6Fdl9MaN5c');
	schedule.success(function(data, status, headers, config){
		$scope.schedule = data;
	});
	schedule.error(function(data, status, headers, config){
		return status;
	});

});


starterApp.controller('ConnexionCtrl', function($scope, $http, $location, $ionicLoading) {



    $scope.signin = function(login, mdp) {

      $ionicLoading.show({
        template: '<ion-spinner icon="android"></ion-spinner>'
      });

      if(!login || !mdp) {
        //Materialize.toast("Erreur : tous les champs sont requis", 1500, "red");
        $ionicLoading.hide();

      } else {

        //Call web service
        var data = {
          'login': login,
          'password': mdp };



        $http.post(url_path+'/api/v1/signin', data)
          .success(function(data) {
            //Materialize.toast("Connexion réussie", 1500, "green");
            $location.path('/app/discipline');
            console.log("Co OK");
          })
          .error(function(data, status) {
            $ionicLoading.hide();
            if (status == 500) {
              //Materialize.toast("Erreur : veuillez réessayer ultérieurement", 1500, "red");
            } else if (status == 401) {
             // Materialize.toast("Erreur : L'utilisateur n'existe pas, veuillez vous inscrire", 1500, "red");
            } else if (status == 400) {
              //Materialize.toast("Erreur : Mot de passe incorrect", 1500, "red");
            }
          })
          .finally(function () {
            $ionicLoading.hide();
          });
      }

    }

  });


starterApp.controller('InscriptionCtrl', function($scope, $http, $window, $location) {


  $scope.signup = function(nom, prenom, email, pseudo, mdp, pswdConfirm, age, adresse) {



    if(!nom || !prenom || !email || !pseudo || !mdp || !pswdConfirm || !age || !adresse) {
      //Materialize.toast("Erreur : tous les champs sont requis", 1500, "red");
      console.log("champ requis");
    } else {
      if (mdp === pswdConfirm) {
        //Call web service
        var data = {
          'nom': nom,
          'prenom': prenom,
          'email': email,
          'login': pseudo,
          'password': mdp,
          'age': age,
          'adresse': adresse };

        $http.post(url_path+'/api/v1/signup', data)
          .success(function(data) {
            //Materialize.toast("Inscription réussi", 1500, "green");
            $location.path('/app/tournament');
            console.log("OK Inscription")

          })
          .error(function(data, status) {
            if (status == 500) {
              //Materialize.toast("Erreur : veuillez réessayer ultérieurement", 1500, "red");
              console.log("erreur interne")

            } else if (status == 401) {
              //Materialize.toast("Erreur : Utilisateur existant", 1500, "red");
              console.log("user exist")

            } else {
              //Materialize.toast("Erreur : veuillez réessayer ultérieurement", 1500, "red");
              console.log("500"+status);
            }
          });
      } else {
        //Materialize.toast("Erreur : Mot de passe différent", 1500, "red");
        console.log("password diff");
      }

    }

  }

  $scope.goBack = function () {
    $window.history.back();
  }





});


