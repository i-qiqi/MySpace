'use strict';

App.factory('UserFactory', function($resource , Session , $base64) {	
	var UserFactory = {
			//登录
			loginIn : function(credentials) {
				// 本地提供的服务，可用loopback快速搭建
				Session.createBasicToken(credentials);
				var user = $resource('users/'+credentials.username);

				// 因为没有写服务端验证用户密码，使用save是为了方便；
				// 这里，如果服务端已存在该credentials，返回的response会包含错误信息，可用来替代401、403等；
				return user.get().$promise;
			},
			
			//登出
			loginOut : function(){
				Session.destroy();
			}
			
	};
	return UserFactory;
})