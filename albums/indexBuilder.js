var HTMLfolderStart = '<div class="folder-entry"></div>';
var HTMLfolderImage = '<a href="%href%">[%data%] &#x21B5;</a>';

var HTMLpicStart = '<figure class="pic-entry grow" style=""></figure>';
//var HTMLpicImage = '<a href="%href%"><img src="%src%" alt=" " title="%title%"></a>';
var HTMLpicImage = '<a href="%href%"></a>';
var HTMLpicCap = '<figcaption class="caption">%caption%</figcaption>';
var HTMLpicBkg = "background-image: url(\'%data%\'); width: %width%px; height: %height%px;";
var HTMLclear = '<div class="clear"></div>';

var PATH = getUrlParameter("folder");
PATH = (PATH == null || PATH==="" || PATH==="/" || PATH==="." || PATH==="./" ? "." : PATH);
var titleText = (PATH==="." ? "Mes Albums" : PATH.indexOf("./")===0 ? PATH.slice(1) : PATH);
if (PATH.indexOf("http")===0) {
    titleText = titleText.replace("http://", "").replace(/\x2f/g, " &#x25ba; ");
} else {
    titleText = titleText.replace(/\x2f/g, " &#x25ba; ");
}

var slash = PATH.lastIndexOf("/");
if (slash>=0 && PATH.slice(slash, PATH.length).indexOf(":")===-1) {
	$(".close a").attr("href",  "index.html?folder=" + PATH.slice(0, slash));
} else {
	$(".close").attr("style", "display: none;");
}
var THUMBNAILS = PATH.indexOf("http")===0 ? PATH + "/" : PATH + "/thumbnails/";

var winWidth = $(window).width();
function getMaxCols() {
    // device width
    var dvWidth = $('html').width() - 20/*scroolbar*/;
    var ratio = 360 / 240;
    var picWidth = parseInt(360 / 1903 * dvWidth), picHeight = parseInt(picWidth / ratio);
    var maxCols = parseInt(dvWidth / (picWidth + 2*10 /*margin*/ + 2*0/*padding*/ + 2*1/*border*/));
    var spaces = dvWidth - maxCols * (picWidth + 2*10 /*margin*/ + 2*0/*padding*/ + 2*1/*border*/);
    $('#main').attr("style", "padding-left: " + spaces/2 + "px; padding-right: " + spaces/2 + "px;");

    return {width: picWidth, height: picHeight, maxCols: maxCols, spaces: spaces, dvWidth: dvWidth, 
            dvAvailWidth : window.screen.availWidth};
}

// getJSON from the server
var json=null;
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

function display() {
    log('display');
    if (json==null) return;
    var albumDesc = json["album-desc"], titleDesc="";
    if (albumDesc!=null && albumDesc.trim()!=="") {
        titleDesc = " <span class='white-text'>\"" + albumDesc + "\"</span>";
    }
    $("#title-id").html(decodeURIComponent(titleText+titleDesc));

	var main = $("#main");
    main.empty();
    json["folders"].forEach(function(folder) {
		main.append(HTMLfolderStart);

		var formattedFolderImage = HTMLfolderImage.replace("%href%", "index.html?folder=" + PATH+"/"+folder.url);
		formattedFolderImage = formattedFolderImage.replace("%data%", folder.url);
		$(".folder-entry:last").append(formattedFolderImage);
	});

	var cols = 0, info = getMaxCols(), maxCols = info.maxCols;
    log(info);
    json["pics"].forEach(function(pic) {
        if (cols===0) {
            main.append(HTMLclear);
        }
        
		main.append(HTMLpicStart);
		var lastPic = $(".pic-entry:last");
        var formattedPicBkg = HTMLpicBkg.replace("%data%", THUMBNAILS + pic.url);
        formattedPicBkg = formattedPicBkg.replace("%width%", info.width);
        formattedPicBkg = formattedPicBkg.replace("%height%", info.height);
        lastPic.attr("style", formattedPicBkg);

		var formattedPicImage = HTMLpicImage.replace("%href%", "full.html?folder=" + PATH + "&link=" + indexOf(pic.url));
		//formattedPicImage = formattedPicImage.replace("%src%", THUMBNAILS + pic.url);
		//formattedPicImage = formattedPicImage.replace("%title%", pic.url);
        var formattedPicCap = HTMLpicCap.replace("%caption%", pic.url);
        lastPic.append(formattedPicCap+formattedPicImage);
        
        var img = new Image();
        img.src = THUMBNAILS + pic.url;
        img.onload = function() {
            if (this.naturalWidth < this.naturalHeight) {
                lastPic.attr("class", "pic-entry pic-vertical grow");
            }
        
            var imgtag = lastPic.children().children();
            var h2=parseInt(imgtag.height());
            h2=h2%2===0 ? h2 : h2+1;
            var w2=parseInt(imgtag.width());
            w2=w2%2===0 ? w2 : w2+1;
            //lastPic.height(h2);
            //lastPic.width(w2);
        }
        
        lastPic.hover(function() {
            lastPic.children(".caption").attr("style", "visibility: inherit;");
        }, function() {
            lastPic.children(".caption").attr("style", "visibility: hidden;");
        });
        
        cols++;
        if (cols===maxCols) {
            cols=0;
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

function onload(){
    log('body onload');
};

$(window).on('resize', function() {    
    log('resize');
    if ($(window).width() !== winWidth) {
        winWidth = $(window).width();
        display();
    }
});

function log(msg) {
    console.log(msg);
}
