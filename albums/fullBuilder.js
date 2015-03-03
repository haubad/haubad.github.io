var local = window.location.href.indexOf("http") === 0 ? false : true;

var header = $(".full-header");
var headerHeight = header[0].clientHeight;

// set <div style="height: h">
var HTMLpic = '<div style="background-image: url(%data%);" id="placeholder" class="full-image"></div>';
var h = window.innerHeight - 0 /*header size*/ - 6/*border-top*/ - 0 /*border pic*/;
var pic = $("#pic");
pic.attr("style", "height: " + h + "px");

// get link=
var currentIdx = parseInt(getUrlParameter("link"));
// get folder=
var PATH = getUrlParameter("folder");
PATH = (PATH == null || PATH==="" || PATH==="/" || PATH==="./" ? "." : PATH);

// set the href of the close button
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
}

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
