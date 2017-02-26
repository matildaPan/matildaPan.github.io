var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'duScroll', 'ui.googleMap', 'ui.load'])
	.value('duScrollDuration', 500)
	.value('duScrollOffset', 90);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',  function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");
	$stateProvider
		.state('home', {
			url: '/home', 
			templateUrl: 'partials/home/home.html',
			controller: 'homeController'
		})
		.state('portfolio', {
			url: '/portfolio',
			templateUrl: 'partials/portfolio/portfolio.html',
			controller: 'portfolioController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'partials/contact/contact.html',
			controller: 'contactController'
		});
}]);

app.run(['$rootScope', '$document', function($rootScope, $document){

}]);