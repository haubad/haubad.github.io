var local = window.location.href.indexOf("http") == 0 ? false : true;
var HTMLpicStart = '<div class="pic-entry"></div>';
var HTMLpicImage = '<a href="%href%" alt="%alt%" target="_parent"><img src="%data%" class="img"></a>';
var HTMLpicDesc = '<div class="desc white-text center">%data%</div>';
var THUMBNAILS = "images/thumbnails/";

// getJSON from the server
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

if (local) {
	display();
} else {
	$.ajax({
		url: "./images/files.json", 
		type: "GET",
		dataType: "json",
		crossDomain: false,
		success: function(data) {
			console.log("index.html " + data);
			json = data;
			display();
		}
	});
}

function display() {
	json["pics"].forEach(function(pic) {
		$("#main").append(HTMLpicStart);

		var formattedPicImage = HTMLpicImage.replace("%href%", "full.html?link=" + indexOf(pic.url));
		//formattedPicImage = formattedPicImage.replace("%alt%", pic.desc);
		formattedPicImage = formattedPicImage.replace("%data%", THUMBNAILS + pic.url);

		var formattedPicDesc = HTMLpicDesc.replace("%data%", pic.desc);

		$(".pic-entry:last").append(formattedPicImage + formattedPicDesc);
	});
};

function indexOf(url) {
	var pics = json["pics"]; 
	var len = pics.length;
	for (var i=0; i<len; i++) {
		if (pics[i].url == url) {
			return i;
		}
	}
	return 0;
}
