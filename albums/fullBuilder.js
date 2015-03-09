var header = $(".full-header");
var headerHeight = header[0].clientHeight;

// set <div style="height: h">
var HTMLpic = '<div style="background-image: url(\'%data%\');" id="placeholder"></div>';
var h = window.innerHeight - 0 /*header size*/ - 5/*border-top*/ - 0 /*border pic*/;
var pic = $("#pic");
pic.attr("style", "height: " + h + "px");

// image maps
$('#pic img').attr("style", "height: " + h + "px; width: 100%; position: absolute; top: 0; left: 0; opacity: 0; z-index: 1;");
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


// get link=
var currentIdx = parseInt(getUrlParameter("link"));
// get folder=
var PATH = getUrlParameter("folder");
PATH = (PATH == null || PATH==="" || PATH==="/" || PATH==="." || PATH==="./" ? "." : PATH);

// set the href of the close button
$(".close a").attr("href", "javascript:history.back()");

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
	$("#title-id").html("<span class='violet-text'>" + param + "</span> @" + (currentIdx + 1) + "/" + len);
	
	var formattedPic = HTMLpic.replace("%data%", PATH + "/" + param);
	pic.hide();
    var p = pic.children("#placeholder");
	if (!anim) {
		p.replaceWith(formattedPic);
	} else {
		p.animate({
            opacity: "toggle"
		}, 0, "linear", function() {
			p.replaceWith(formattedPic);
		});
	}
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
        //
    } else if (e.keyCode===39) { // RIGHT
        clickNext();
    } else if (e.keyCode===37) { // LEFT
        clickPrev();
    }
});

$("#pic").swipe({
    //Generic swipe handler for all directions
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction==="left") {
            log("You swiped " + direction);
            clickNext();
        } else if (direction==="right") {
            log("You swiped " + direction);
            clickPrev();
        }
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 0
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
