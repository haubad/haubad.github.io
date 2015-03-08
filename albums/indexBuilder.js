var HTMLfolderStart = '<div class="folder-entry"></div>';
var HTMLfolderImage = '<a href="%href%">[%data%] &#x21B5;</a>';

var HTMLpicStart = '<figure class="pic-entry grow" style=""></figure>';
//var HTMLpicImage = '<a href="%href%"><img src="%src%" alt=" " title="%title%"></a>';
var HTMLpicImage = '<a href="%href%"></a>';
var HTMLpicCap = '<figcaption class="caption">%caption%</figcaption>';
var HTMLpicBkg = "background-image: url(\'%data%\')";
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

function getMaxCols() {
    // device width
    var dvWidth = $('html').width();
    var ratio = 358 / 246;
    //var picWidth = parseInt(358 / 1903 * dvWidth), picHeight = parseInt(picWidth / ratio);
    var picWidth = 358, picHeight = 246;
    var maxCols = parseInt(dvWidth / (picWidth + 2*10 /*margin*/ + 2*0/*padding*/ + 2*1/*border*/));
    var spaces = dvWidth - maxCols * (picWidth + 2*10 /*margin*/ + 2*0/*padding*/ + 2*1/*border*/);
    $('#main').attr("style", "padding-left: " + spaces/2 + "px; padding-right: " + spaces/2 + "px;");
    log('getMaxCols: ' + maxCols);
    log(dvWidth+" "+ratio+" "+picWidth+" "+picHeight+" "+spaces);
    log("padding-left: " + spaces/2 + "px; padding-right: " + spaces/2 + "px;");
    return maxCols;
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

	var cols = 0, maxCols = getMaxCols();
    json["pics"].forEach(function(pic) {
        if (cols===0) {
            main.append(HTMLclear);
        }
        
		main.append(HTMLpicStart);
		var lastPic = $(".pic-entry:last");
        lastPic.attr("style", HTMLpicBkg.replace("%data%", THUMBNAILS + pic.url));

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
    getMaxCols();
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

$(window).on('resize', function() {
    log('resize');
    display();
});

function log(msg) {
    //console.log(msg);
}
