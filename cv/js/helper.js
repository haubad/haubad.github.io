/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="white-text">%data%</span>';
var HTMLheaderOptions = 
    '<div class="btn-primary">'+
    '   <a class="cursor orange right margin-none" data-toggle="dropdown" data-target="#demo">'+
    '       <span class="fa fa-bars fa-left fa-right"/>'+
    '   </a>'+
    '   <ul id="demo" class="dropdown-menu clear right">'+
    '       <li><a class="a-options cursor white disabled" onclick="switch_theme(0)">Thème Dark</a></li>'+
    '       <li class="divider" />'+
    '       <li><a class="a-options cursor white" onclick="switch_theme(1)">Thème Light</a></li>'+
    '       <li class="divider" />'+
    '   </ul>'+
    '</div>';
var HTMLheaderLine = '<div class="single-line" />';
var HTMLheaderDiv  = '<div>%name% %role% %options% %line%</div>';

var HTMLmobile = '<li><span class="blue-text fa fa-phone fa-right"/><span class="white-text">%data%</span></li>';
var HTMLemail = '<li><span class="blue-text fa fa-envelope fa-right"/><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li><span class="blue-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li><span class="blue-text fa fa-github fa-right"/><span class="white-text">%data%</span></li>';
var HTMLblog = '<li><span class="blue-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li><span class="blue-text fa fa-location-arrow fa-right"/><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';

var HTMLskillsStart = '<h3><span class="fa fa-code"/>Compétences</h3><div id="skills"></div>';
var HTMLskills = '<div class="flex-box flex-skills">%data%</div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_blank">%data%';
var HTMLworkTitle = '%data%</a>';
var HTMLworkTitleProject = '<div class="a-none-link">%data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div><br>';
var HTMLworkDescStart = '<div class="desc"><ul class="desc-start"></ul></div><br/>';
var HTMLworkDesc = '<li>%data%</li>';
var HTMLworkDescSimple = '<div class="desc">%data%</div><br/>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div><br/>';
var HTMLschoolMajor = '<div class="desc"><p><em>Domaine: %data%</em></p></div><br/>';

var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<p><a href="#">%data%</a></p><br/>';
var HTMLonlineLocation = '<div class="location-text">%data%</div><br/><br/>';
var HTMLonlineDescription = '<div class="desc"><p>%data%</p></div><br/>';

var internationalizeButton = '<button id="internationalize">FR/EN</button>';
var googleMap = '<div id="map"></div>';

function formatLink(link, data, ref) {
    var formattedLink = link.replace("%data%", data);
    if (ref === "#") {
        return formattedLink.replace("_blank", "_self");
    }
    return formattedLink.replace("#", ref);
}

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});*/

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
    var locations;
    var mapOptions = {
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true
    };

    // This next line makes `map` a new Google Map JavaScript Object and attaches it to
    // <div id="map">, which is appended as part of an exercise late in the course.
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {
        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school/online-courses locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            locations.push(education.schools[school].gps);
        }
        for (var school in education.onlineCourses) {
            if (education.onlineCourses[school].gps !== "") {
                locations.push(education.onlineCourses[school].gps);
            }
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            if (work.jobs[job].gps !== "") {
                locations.push(work.jobs[job].gps);
            }
        }

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {
        //console.log(placeData);
        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.name + "\n" + placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: placeData.name + "<br>" + placeData.formatted_address
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {
        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {
            // the search request object
            var request = {
                query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
