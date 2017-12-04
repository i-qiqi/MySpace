'use strict';

// uer controller
App.controller('UserController', function($scope, $rootScope, AUTH_EVENTS, Session,
		UserService , $state) {
	$scope.credentials = {
		username : '',
		password : ''
	};
	$scope.DealLogin = function() {

		console.log('login',$scope.credentials);
		UserService.loginIn($scope.credentials).then(function(user) {
			if(user.password == $scope.credentials.password){
				Session.createUserAndRole(user, null);//把用户id 作为sessionId
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);			
				console.log("userName :"+user.userName + " password :" +user.email);
				$state.go("home.aboutMe");
			}else{
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
//				$state.go("login"); //重新登录
			}
		}, function(res) {
			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
			console.log("User doesn't exist ..... :" + res.data);
		});
	};
})