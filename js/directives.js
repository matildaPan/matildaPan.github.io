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