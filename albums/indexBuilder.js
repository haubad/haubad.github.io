var local = window.location.href.indexOf("http") === 0 ? false : true;

var HTMLfolderStart = '<div class="folder-entry"></div>';
var HTMLfolderImage = '<a href="%href%">[%data%] &#x21B5;</a>';

var HTMLpicStart = '<figure class="pic-entry grow"></figure>';
var HTMLpicImage = '<a href="%href%"><img src="%data%" alt="%alt%"></a>';
var HTMLpicDesc = '<figcaption class="desc white-text">%data%</figcaption>';

var PATH = getUrlParameter("folder");
PATH = (PATH == null || PATH==="" || PATH==="/" || PATH==="./" ? "." : PATH);
var titleText = (PATH==="." ? "Mes Albums" : PATH.indexOf("./")===0 ? PATH.slice(1) : PATH);
if (PATH.indexOf("http")===0) {
    titleText = titleText.replace("http://", "").replace(/\x2f/g, " &#x25ba; ");
} else {
    titleText = titleText.replace(/\x2f/g, " &#x25ba; ");
}

var slash = PATH.lastIndexOf("/");
if (slash>=0) {
	$(".close a").attr("href",  "index.html?folder=" + PATH.slice(0, slash));
} else {
	$(".close").attr("style", "display: none;");
}
var THUMBNAILS = PATH.indexOf("http")===0 ? PATH + "/" : PATH + "/thumbnails/";
	
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
		crossDomain: true,
		success: function(data) {
			json = data;
			display();
		}
	});
}

$("a").click(function(e){
});

function display() {
    var albumDesc = json["album-desc"];
    if (albumDesc!=null && albumDesc.trim()!=="") {
        titleText += " <span class='white-text'>\"" + albumDesc + "\"</span>";
    }
    $("#title-id").html(decodeURIComponent(titleText));

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
		var lastPic = $(".pic-entry:last");
        lastPic.append(formattedPicImage);
        
        var img = new Image();
        img.src = THUMBNAILS + pic.url;
        img.onload = function() {
            if (this.naturalWidth < this.naturalHeight) {
                lastPic.attr("style", "width: 250px; height: 400px;");
            }
        }        
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
