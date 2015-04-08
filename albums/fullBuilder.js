var body = $("body");
var downloading = $("#downloading");

var header = $(".full-header");
var margin = 20;
var headerHeight = header[0].clientHeight;
var topHeight = headerHeight /*header size*/ + 5/*border-top*/;

// set <div style="height: h">
//var HTMLpic = '<figure style="background-image: url(\'%data%\');" id="placeholder"></figure>';
var h = window.innerHeight - topHeight;
var pic = $("#pic");
var placeholder = $("#placeholder");
pic.attr("style", "height: " + h + "px;");

// image maps
$('#zones').attr("style", "height: " + h + "px; width: 100%; position: absolute; left: 0; opacity: 0; z-index: 1; top: " + topHeight + "px;");
var map = $('#area-prev');
map.attr('coords', "0, " + topHeight + ", " + (window.innerWidth/2) + ", " + window.innerHeight);
map.click(function(e) {
    'use strict';
    clickPrev();
});

map = $('#area-next');
map.attr('coords', (window.innerWidth/2) + ", " + topHeight + ", " + window.innerWidth + ", " + window.innerHeight);
map.click(function(e) {
    'use strict';
    clickNext();
});

function init() {
    var h = window.innerHeight - topHeight;
    var pic = $("#pic");
    pic.attr("style", "height: " + h + "px;");
    
    $('#zones').attr("style", "height: " + h + "px; width: 100%; position: absolute; left: 0; opacity: 0; z-index: 1; top: " + topHeight + "px;");
    $('#area-prev').attr('coords', "0, " + topHeight + ", " + (window.innerWidth/2) + ", " + window.innerHeight);
    $('#area-next').attr('coords', (window.innerWidth/2) + ", " + topHeight + ", " + window.innerWidth + ", " + window.innerHeight);
    
    display(json["pics"][currentIdx].url);
}

// get link=
var currentIdx = parseInt(getUrlParameter("link"));
// get folder=
var PATH = getUrlParameter("folder");
PATH = (PATH == null || PATH==="" || PATH==="/" || PATH==="." || PATH==="./" ? "." : PATH);

// set the href of the close button
$(".btn-round").click(function() {
    history.back();
});

// getJSON
var json, len;
$.ajax({
    url: PATH + "/files.json", 
    type: "GET",
    dataType: "json",
    crossDomain: true,
    success: function(data) {
        json = data;
        len = json["pics"].length;
        display(json["pics"][currentIdx].url);
    }
});

function display(param) {

    if (json == null) return;

    $("#title-id").html("<span class='violet-text'>" + param + "</span> @" + (currentIdx + 1) + "/" + len);
	
    var h = window.innerHeight - topHeight;
    body.addClass("progress-cursor"); 
    downloading.removeClass("disabled");
    if (window.innerHeight < window.innerWidth) {
        placeholder.attr("style", "height: " + (h - 2*margin - 5) + "px; display: none;");
    } else {
        placeholder.attr("style", "width: 95%; display: none;");
    }
    placeholder.attr("src", PATH + "/" + param);
}

$(".prev-button").click(function() {
    'use strict';
    clickPrev()
});

$(".next-button").click(function() {
    'use strict';
    clickNext()
});

$('#pic').on('wheel', function(e) {
    'use strict';
    //console.log(e);
    if (e.originalEvent.deltaY > 0 /*chrome, firefox*/ || e.originalEvent.wheelDelta < 0 /*IE*/) { // DOWN
        clickNext();
    } else { // UP
        clickPrev();
    }
});

$(document).keyup(function(e) {
    'use strict';
    if (e.keyCode === 27) { // ESCAPE
        history.back();
    } else if (e.keyCode === 39) { // RIGHT
        clickNext();
    } else if (e.keyCode === 37) { // LEFT
        clickPrev();
    }
});

function clickPrev() {
	var oldIdx = currentIdx;
	currentIdx = getPrevPic();
	if (currentIdx !== oldIdx) {
		display(json["pics"][currentIdx].url);
	}
}

function clickNext() {
	var oldIdx = currentIdx;
	currentIdx = getNextPic();
	if (currentIdx !== oldIdx) {
		display(json["pics"][currentIdx].url);
	}
	//window.location.href = window.location.pathname + "?link=hhh.jpg"; // makes the page to be reloaded
}

function getNextPic() {
	var len = json["pics"].length;
	if (currentIdx < len - 1) {
		return currentIdx + 1;
	}
	return currentIdx;
}

function getPrevPic() {
	if (currentIdx > 0) {
		return currentIdx - 1;
	}
	return currentIdx;
}

$(window).on('resize', function() {
    init();
});

function changeCursor() {
    window.setTimeout(function(){
    }, 0);
        downloading.addClass("disabled");
        placeholder.fadeIn();
        body.removeClass("progress-cursor"); 
}
