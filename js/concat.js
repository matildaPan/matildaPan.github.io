var app = angular.module('myApp', ['ui.router', 'ui.bootstrap', 'duScroll', 'ui.googleMap', 'ui.load'])
	.value('duScrollDuration', 500)
	.value('duScrollOffset', 90);

app.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
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
		})
		;
}]);

app.run(['$rootScope', '$document', function($rootScope, $document){

}])
app.service('textService', [ function(){
	this.getTextData = function() {
		return {
			title: 'Product Description llllll'
		};
	}
}]);
app.controller('navController', ['$scope', '$state ', function($scope, $state ){
	$scope.isCollapsed = true;
	
}])

// Home Page
app.controller('homeController', ['$scope', '$location', 'textService', function ($scope, $location, textService) {
	$scope.TextObj = textService.getTextData();
}]);

// Portfolio Page
app.controller('portfolioController', ['$scope', '$location', 'textService', '$document', function ($scope, $location, textService, $document) {

	$scope.$on('$includeContentLoaded', function(event, src) {
		if (src == 'partials/portfolio/work_experience.html'){
			var experienceElement = angular.element($('#experience'));
			$document.scrollToElementAnimated(experienceElement);
		}
	});
}]);

//Project Section in Portfolio page
app.controller('projectsController', ['$scope', '$uibModal', function($scope, $uibModal){
	$scope.webDetail = function() {
		$uibModal.open({
			animation: true,
			templateUrl: 'partials/portfolio/webDetail.html',
			controller: 'projectInstanceCtrl'
		});
	};

	$scope.surveyDetail = function() {
		$uibModal.open({
			animation: true,
			templateUrl: 'partials/portfolio/surveyDetail.html',
			controller: 'projectInstanceCtrl'
		});
	};


}]);

app.controller('projectInstanceCtrl', ['$scope', function($scope){
	$scope.slidesInterval = 3000;
	$scope.noWrapSlides = false;
	$scope.webSlides = [{image: 'css/images/projects/laravel/create-page.jpg', text: 'Create Project'}, {image: 'css/images/projects/laravel/edit-page.jpg', text: 'Edit Page'}, {image: 'css/images/projects/laravel/output-page.jpg', text: 'Output Page'}, {image: 'css/images/projects/laravel/edit-single-project.jpg', text: 'Edit Single Project'}, {image: 'css/images/projects/laravel/group-bar-chart.jpg', text: 'Group Bar Chart'}, {image: 'css/images/projects/laravel/single-bar-chart.jpg', text: 'Single Bar Chart'},  {image: 'css/images/projects/laravel/stacked-bar-chart.jpg', text: 'Stacked Bar Chart'}];

	$scope.surveySlides = [{image: 'css/images/projects/surveys/vaccination.jpg', text: 'Survey Example 1'}, {image: 'css/images/projects/surveys/sansom.jpg', text: 'Survey Example 2'}, {image: 'css/images/projects/surveys/hand_wash.jpg', text: 'Survey Example 3'}];
}]);

//Contact Page
app.controller('contactController', ['$scope', function($scope){

}])
angular.module('myApp')
  .directive('googleMap', ['uiGoogleMap', function ( uiGoogleMap) {
        return {
            restrict: 'AC',
            link: function (scope, el, attr) {
                uiGoogleMap.mapsInitialized.then(function () {
                    uiGoogleMap.mapIntial(el[0]);
                });
            }
        };
    }]);