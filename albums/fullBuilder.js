
var header = $(".full-header");
var padding = 25;
var headerHeight = header[0].clientHeight + 2*padding;

// get overlay=
var overlayStr = getUrlParameter("overlay");
var overlay = overlayStr == null || overlayStr === "0" ? 1 : 1;

// set <div style="height: h">
//var HTMLpic = '<figure style="background-image: url(\'%data%\');" id="placeholder"></figure>';
var HTMLpic = '<img src="%data%" id="placeholder">';
var h = window.innerHeight - headerHeight*overlay /*header size*/ - 5/*border-top*/ - 0 /*border pic*/;
var pic = $("#pic");
pic.attr("style", "height: " + h + "px; top: " + (headerHeight*overlay-padding-5) + "px;" + (overlay===0 ? "":" position: relative;"));

// image maps
$('#zones').attr("style", "height: " + h + "px; width: 100%; position: absolute; top: 0; left: 0; opacity: 0; z-index: 1;");
var map = $('#area-prev');
map.attr('coords', "0, " + (5+headerHeight) + ", " + (window.innerWidth/2) + ", " + (window.innerHeight));
map.click(function(e) {
    'use strict';
    clickPrev();
});

map = $('#area-next');
map.attr('coords', (window.innerWidth/2) + ", " + (5+headerHeight) + ", " + (window.innerWidth) + ", " + (window.innerHeight));
map.click(function(e) {
    'use strict';
    clickNext();
});

function init() {
    h = window.innerHeight - headerHeight*overlay /*header size*/ - 5/*border-top*/ - 0 /*border pic*/;
    var pic = $("#pic");
    pic.attr("style", "height: " + h + "px; top: " + (headerHeight*overlay-padding-5) + "px;" + (overlay===0 ? "":" position: relative;"));
    
    $('#zones').attr("style", "height: " + h + "px; width: 100%; position: absolute; top: 0; left: 0; opacity: 0; z-index: 1;");
    $('#area-prev').attr('coords', "0, " + (5+headerHeight) + ", " + (window.innerWidth/2) + ", " + (window.innerHeight));
    $('#area-next').attr('coords', (window.innerWidth/2) + ", " + (5+headerHeight) + ", " + (window.innerWidth) + ", " + (window.innerHeight));
    
    display(json["pics"][currentIdx].url, true);
}

// get link=
var currentIdx = parseInt(getUrlParameter("link"));
// get folder=
var PATH = getUrlParameter("folder");
PATH = (PATH == null || PATH==="" || PATH==="/" || PATH==="." || PATH==="./" ? "." : PATH);

// set the href of the close button
//$(".btn-round a").attr("href", "javascript:history.back()");
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
        display(json["pics"][currentIdx].url, false);
    }
});

function display(param, anim) {
    if (json == null) return;

    $("#title-id").html("<span class='violet-text'>" + param + "</span> @" + (currentIdx + 1) + "/" + len);
	
	var formattedPic = HTMLpic.replace("%data%", PATH + "/" + param);
    //pic.fadeOut();
    //pic.hide();
    var p = pic.find("#placeholder");    
    p.attr("style", "height: " + h + "px;");
    p.attr("src", PATH + "/" + param);
	pic.fadeIn();
}

$(".prev").click(function() {
    'use strict';
    clickPrev()
});

$(".next").click(function() {
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
    if (e.keyCode===27) { // ESCAPE
        history.back();
    } else if (e.keyCode===39) { // RIGHT
        clickNext();
    } else if (e.keyCode===37) { // LEFT
        clickPrev();
    }
});

function clickPrev() {
	var oldIdx = currentIdx;
	currentIdx = getPrevPic();
	if (currentIdx !== oldIdx) {
		display(json["pics"][currentIdx].url, true);
	}
}

function clickNext() {
	var oldIdx = currentIdx;
	currentIdx = getNextPic();
	if (currentIdx !== oldIdx) {
		display(json["pics"][currentIdx].url, true);
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
