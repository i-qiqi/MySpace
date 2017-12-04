'use strict';

//AuthFactory
App.factory('AuthFactory', function(Session, GLOBAL , $base64) {	
	var AuthFactory = {};

	//是否认证
	AuthFactory.isAuthenticated = function() {
		return !!Session.getBasicToken(); // !! <==> boolean() , null--> false // otherwise --> true
	};

	//是否有权
	AuthFactory.isAuthorized = function(authorizedRoles) { // 用户角色控制
		if (!angular.isArray(authorizedRoles)) {
			authorizedRoles = [ authorizedRoles ]; // 包裹成数组
		}
		return (AuthFactory.isAuthenticated() && authorizedRoles
				.indexOf(Session.getRole()) !== -1); // 用户认证通过， 且在拥有角色权限，有权访问
	};
	
	//
	AuthFactory.getBasicToken = function(){
		 if(AuthFactory.isAuthenticated()){//如果已经认证
			 return Session.getBasicToken();
		 }else{
			 return null;
		 }
	}
	
	AuthFactory.getCurrentUser =function(){
		return Session.getUser();
	}
	
	return AuthFactory;
})