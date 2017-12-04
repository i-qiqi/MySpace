'use strict';
//
var App = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ui.router' ,'base64', 'ngResource', 'LocalStorageModule' , 'ui.bootstrap']);

//set prefix to avoid overwriting ang local variables from the rest of my app
//myApp.config(function (localStorageServiceProvider) {
//	  localStorageServiceProvider
//	    .setPrefix('Shop');
//	});
//setStorageType--> change web storage type to localStorage or sessionStorage
//Default Type : localStorage
App.config(function(localStorageServiceProvider){
	localStorageServiceProvider
	 .setPrefix('Shop')
	 .setStorageType('sessionStorage')
	 .setNotify(true, true);
});

/**
 * if localStorage is not supported , the library will default to cookies instead . this behavior
 *  can be disabled
 */
App.config(function(localStorageServiceProvider){
	localStorageServiceProvider.setDefaultToCookie(false);
});
