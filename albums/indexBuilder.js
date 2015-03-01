var local = window.location.href.indexOf("http") === 0 ? false : true;

var HTMLfolderStart = '<div class="folder-entry"></div>';
var HTMLfolderImage = '<a href="%href%" target="_parent">[%data%] &#x21B5;</a>';

var HTMLpicStart = '<figure class="pic-entry grow"></figure>';
var HTMLpicImage = '<a href="%href%" target="_parent"><img src="%data%" alt="%alt%"></a>';
var HTMLpicDesc = '<figcaption class="desc white-text">%data%</figcaption>';

var PATH = getUrlParameter("folder");
PATH = (PATH == null || PATH==="" || PATH==="/" || PATH==="./" ? "." : PATH);
var titleText = (PATH==="." ? "Mes Albums" : PATH.indexOf("./")===0 ? PATH.slice(1) : PATH);
titleText = titleText.replace(/\x2f/g, " &#x25ba; ");

var slash = PATH.lastIndexOf("/");
if (slash>=0) {
	$(".close a").attr("href",  "index.html?folder="+PATH.slice(0, slash));
} else {
	$(".close").attr("style", "display: none;");
}
var THUMBNAILS = PATH+"/thumbnails/";
	
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
    "album-desc": "",
	folders: folders,
	pics: pics
};

if (local) {
	display();
} else {
	$.ajax({
		url: PATH + "/files.json", 
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
    var albumDesc = json["album-desc"];
    if (albumDesc!=null && albumDesc!=="") {
        titleText += " <span class='blue-text'>\"" + albumDesc + "\"</span>";
    }
    $("#title-id").html(titleText);

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
}

function indexOf(url) {
	var pics = json["pics"], len = pics.length;
	for (var i=0; i<len; i++) {
		if (pics[i].url == url) {
			return i;
		}
	}
	return 0;
}
