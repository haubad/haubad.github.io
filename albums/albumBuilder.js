var HTMLpicStart = '<div class="pic-entry"></div>';
var HTMLpicImage = '<a href="%href%" alt="%alt%" target="_parent"><img src="%data%" class="img"></a>';
var HTMLpicDesc = '<div class="desc white-text center">%data%</div>';
var IMAGES = "images/", THUMBNAILS = "images/thumbnails/";

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

pics.display = function() {
	pics.forEach(function(pic) {
		$("#main").append(HTMLpicStart);

		var formattedPicImage = HTMLpicImage.replace("%href%", "full.html?link=" + pic.url);
		formattedPicImage = formattedPicImage.replace("%alt%", pic.desc);
		formattedPicImage = formattedPicImage.replace("%data%", THUMBNAILS + pic.url);

		var formattedPicDesc = HTMLpicDesc.replace("%data%", pic.desc);

		$(".pic-entry:last").append(formattedPicImage + formattedPicDesc);
	});
};
pics.display();

/*$.ajax({
  type: "GET", 
  url: "http://78.225.136.246:5900/ALBUM%20PHOTOS%202015/02-2015/VACANCES%20CAP%20D%27AGDE/slide/",
  success: function(data){
     console.log(data);
  }
});
*/

/*$.ajax({
	url: "http://haubad.github.io/cv/images/files.json", 
	type: "GET",
	dataType: "jsonp"
}).done(function(data) {
		console.log(data);
	}
);
*/

function getJSON(url) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	return JSON.parse(xmlhttp.responseText);
	    }
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

console.log(getJSON("http://haubad.github.io/cv/images/files.json"));
