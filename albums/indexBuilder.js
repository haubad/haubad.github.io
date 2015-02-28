var local = window.location.href.indexOf("http") == 0 ? false : true;

var HTMLfolderStart = '<div class="folder-entry"></div>';
var HTMLfolderImage = '<a href="%href%" target="_parent">[%data%]</a>';

var HTMLpicStart = '<figure class="pic-entry grow"></figure>';
var HTMLpicImage = '<a href="%href%" target="_parent"><img src="%data%" alt="%alt%"></a>';
var HTMLpicDesc = '<figcaption class="desc white-text center">%data%</figcaption>';

var PATH = getUrlParameter("folder"), THUMBNAILS = PATH+"/thumbnails/";
PATH = PATH==null ? "." : PATH;

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
var folders = [
	{
		url: "abc",
		desc: "dsqfdq"
	}
];
var json = {
	folders: folders,
	pics: pics
};

if (local) {
	display();
} else {
	$.ajax({
		url: PATH+"/files.json", 
		type: "GET",
		dataType: "json",
		crossDomain: false,
		success: function(data) {
			json = data;
			display();
		}
	});
}

function display() {
	json["folders"].forEach(function(folder) {
		$("#main").append(HTMLfolderStart);

		var formattedFolderImage = HTMLfolderImage.replace("%href%", "index.html?folder=" + PATH+"/"+folder.url);
		formattedFolderImage = formattedFolderImage.replace("%data%", folder.url);
		$(".folder-entry:last").append(formattedFolderImage);
	});

	json["pics"].forEach(function(pic) {
		$("#main").append(HTMLpicStart);

		var formattedPicImage = HTMLpicImage.replace("%href%", "full.html?folder=" + PATH + "&link=" + indexOf(pic.url));
		formattedPicImage = formattedPicImage.replace("%alt%", pic.desc);
		formattedPicImage = formattedPicImage.replace("%data%", THUMBNAILS + pic.url);

		var formattedPicDesc = HTMLpicDesc.replace("%data%", pic.desc);
		$(".pic-entry:last").append(formattedPicImage);
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
