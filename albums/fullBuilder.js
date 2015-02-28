var local = window.location.href.indexOf("http") == 0 ? false : true;

// set <div style="height: h">
var HTMLpic = '<div style="background-image: url(./%data%);" id="placeholder" class="full-image"></div>';
var h = window.innerHeight - 41 /*title dim*/ - 6/*border-top*/ - 0 /*border pic*/;
var pic = $("#pic");
pic.attr("style", "height: " + h + "px");

// get current link index
var PATH = getUrlParameter("folder");
var currentIdx = parseInt(getUrlParameter("link"));

// set button href
//$(".close a").attr("href", "index.html?folder=" + PATH);
$(".close a").attr("href", "javascript:history.back()");

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
var json = {pics: pics}, len = json["pics"].length;

if (local) {
	display(json["pics"][currentIdx].url, false);
} else {
	$.ajax({
		url: PATH+"/files.json", 
		type: "GET",
		dataType: "json",
		crossDomain: false,
		success: function(data) {
			json = data;
			len = json["pics"].length;
			display(json["pics"][currentIdx].url, false);
		},
	});
}

function display(param, anim) {
	$("#title-id").text(param + " @" + (currentIdx+1) + "/" + len);
	
	var formattedPic = HTMLpic.replace("%data%", PATH + "/" + param);
	var p = pic.children("#placeholder");
	if (!anim) {
		p.replaceWith(formattedPic);
	} else {
		p.animate({
	    	opacity: "toggle"
		}, 1000, "linear", function() {			
			p.replaceWith(formattedPic);
		});
	}
}

$(".prev").click(function() {
	var oldIdx = currentIdx;
	currentIdx = getPrevPic();
	if (currentIdx !== oldIdx) {
		display(json["pics"][currentIdx].url, true);
	}
});

$(".next").click(function() {
	var oldIdx = currentIdx;
	currentIdx = getNextPic();
	if (currentIdx !== oldIdx) {
		display(json["pics"][currentIdx].url, true);
	}
	//window.location.href = window.location.pathname + "?link=hhh.jpg"; // makes the page to be reloaded
});

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
