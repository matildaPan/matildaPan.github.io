'use strict';
// Google async initializer needs global function, so we use $window
angular.module('ui.googleMap', [])
.service('uiGoogleMap',['$window','$q', function ($window, $q) {
    
    //Google's url for async maps initialization accepting callback function
    var asyncUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDXZqDb9H3RD1lukwYibR6TwvJN0RMEsVg&v=3.exp&sensor=false&callback=',
        mapsDefer = $q.defer();
    
    //Callback function - resolving promise after maps successfully loaded
    $window.googleMapsInitialized = mapsDefer.resolve; // removed ()
    
    //Async loader
    var asyncLoad = function (url, callbackName) {
        var script = document.createElement('script');
        //script.type = 'text/javascript';
        script.src = url + callbackName;
        document.body.appendChild(script);
    };
    //Start loading google maps
    asyncLoad(asyncUrl, 'googleMapsInitialized');
    //Usage: Initializer.mapsInitialized.then(callback)
    
    var mapIntial= function (element) {
        var mapDark = [
            {
                "stylers": [
                    {
                        "hue": "#ff1a00"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 33
                    },
                    {
                        "gamma": 0.5
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2D333C"
                    }
                ]
            }
        ];
        
        var mapLight = [
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "stylers": [
                    {
                        "hue": "#00aaff"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 2.15
                    },
                    {
                        "lightness": 12
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 24
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 57
                    }
                ]
            }
        ]
        var yourLatitude = -34.0314726;
        var yourLongitude = 151.0579866;
        
        var myOptions = {
            zoom: 12,
            center: new google.maps.LatLng(yourLatitude, yourLongitude - 0.01),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            scaleControl: false,
            streetViewControl: false,
            styles: mapDark
        };
        var map = new google.maps.Map(element, myOptions);
        
        var image = 'css/images/map-marker-icon.png';
        var myLatLng = new google.maps.LatLng(yourLatitude, yourLongitude);
        var myLocation = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });
    }
    
    

    return {
        mapsInitialized : mapsDefer.promise,
        mapIntial : mapIntial
    };
}])