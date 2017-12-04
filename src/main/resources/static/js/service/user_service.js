'use strict';

//UserService
App.service('UserService' ,function(UserFactory){
	this.loginIn = function(credentials){
		return UserFactory.loginIn(credentials);
	} 
	this.loginOut = function(){
		UserFactory.loginOut();
	}
});