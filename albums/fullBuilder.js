// set <div style="height: h">
var IMAGES = "images/";
var HTMLpic = '<div style="background-image: url(./%data%);" id="placeholder" class="full-image"></div>';
var h = window.innerHeight - 41 /*title dim*/ - 6/*border-top*/ - 0 /*border pic*/;
var pic = $("#pic");
pic.attr("style", "height: " + h + "px");

// get current link index
var currentIdx = parseInt(getUrlParameter("link"));

// getJSON
var pics = [
	{
		url: "fry.jpg",
		desc: "sdqdqs"
	},
	{
		url: "197x148.gif",
		desc: "sdqdqs"
	},
	{
		url: "hhh.jpg",
		desc: "sdqdqs"
	}
];
var json = {pics: pics};
$.ajax({
	url: "./images/files.json", 
	type: "GET",
	dataType: "json",
	crossDomain: false,
	success: function(data) {
		console.log("full.html " + data + " " + currentIdx);
		json = data;
		display(json["pics"][currentIdx].url);
	},
});

function display(param) {
	$("#title-id").text(param);
	
	var formattedPic = HTMLpic.replace("%data%", IMAGES + param);
	pic.children("#placeholder").replaceWith(formattedPic);
}

$(".prev").click(function() {
	currentIdx = getPrevPic();
	display(json["pics"][currentIdx].url);
});

$(".next").click(function() {
	currentIdx = getNextPic();
	display(json["pics"][currentIdx].url);
	//window.location.href = window.location.pathname + "?link=hhh.jpg"; // makes the page to be reloaded
});

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i=0; i<sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
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
