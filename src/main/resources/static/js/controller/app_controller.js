'use strict';

App.controller('ApplicationController', function($scope, AuthFactory ,$rootScope, AUTH_EVENTS, Session,
		UserService , $state , $timeout) {
	$scope.currentUser = AuthFactory.getCurrentUser(); //当前用户
	$scope.isAuthenticated = AuthFactory.isAuthenticated();
	$scope.setCurrentUser = function() {
		$scope.currentUser = AuthFactory.getCurrentUser();
		console.log("$scope.currentUser : "+$scope.currentUser);
		$scope.isAuthenticated = AuthFactory.isAuthenticated();
	};
	$scope.$on(AUTH_EVENTS.loginSuccess , $scope.setCurrentUser);
	$scope.$on(AUTH_EVENTS.logoutSuccess , $scope.setCurrentUser);
	
	$scope.loginOut = function(){
		console.log("loginOut");
		UserService.loginOut();
		$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
		$timeout(function(){
			$state.go("login");
		} , 1000);	
	}
})