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