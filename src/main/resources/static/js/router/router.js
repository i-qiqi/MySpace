//路由
App.config([ '$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('home.aboutMe')
			$stateProvider.state('home', {
				url : '/home',
				templateUrl : 'home.html',
				controller : 'HomeController'
			})
			/**
			 * User router
			 */
			$stateProvider.state('login' , {
				url : '/login',
				templateUrl : 'login.html',
				controller : 'UserController'
			})
			$stateProvider.state('home.aboutMe', {
				url : '/home/aboutMe',
				templateUrl : 'aboutMe.html',
			})
			$stateProvider.state('thoseYears', {
				url : '/home/thoesYesrs',
				templateUrl : 'album.html',
				controller : 'AlbumController'
			})	
}]);