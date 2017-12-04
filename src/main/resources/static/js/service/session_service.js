'use strict';
//注册Session , 用于存放服务端用户的Session
App.service('Session', function($base64 , localStorageService) {
	this.createBasicToken = function(credentials){
		var basicToken = 'Basic '+$base64.encode(credentials.username+":"+credentials.password);
		localStorageService.set('basicToken', basicToken)
	}
	this.createUserAndRole = function(user, role) {
		localStorageService.set('user', user);
		localStorageService.set('role', role);
		
	};
	this.destroy = function() {
		localStorageService.set('user', null);
		localStorageService.set('role', null);
		localStorageService.set('basicToken' , null);
	};
	
	this.getUser = function(){
		return localStorageService.get('user');
	}
	this.getRole = function(){
		return localStorageService.get('role');
	}
	this.getBasicToken = function(){
		return localStorageService.get('basicToken');
	}
})