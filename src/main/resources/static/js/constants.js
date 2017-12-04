'use strict';

// 用户状态记录
App.constant('AUTH_EVENTS', {
	loginSuccess : 'auth-login-success',
	loginFailed : 'auth-login-failed',
	logoutSuccess : 'auth-logout-success',
	sessionTimeout : 'auth-session-timeout',
	notAuthenticated : 'auth-not-authenticated',
	notAuthorized : 'auth-not-authorized'
})

// 用户权限
App.constant('USER_ROLES', {
	all : '*',
	admin : 'admin',
	editor : 'editor',
	guest : 'guest'
})

// 全局常量
App.constant('GLOBAL', {
	basePath : '/BuyProcDemo/',
});