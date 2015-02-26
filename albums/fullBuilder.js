var param = getUrlParameter("link");
$("#title-id").text(param);

var IMAGES = "images/";
var HTMLpic = '<div style="background-image: url(./%data%); height: %height%px;" class="full-image"></div>';
var formattedPic = HTMLpic.replace("%data%", IMAGES + param);
formattedPic = formattedPic.replace("%height%", window.innerHeight - 41 /*title dim*/ - 6/*border-top*/ - 0 /*border pic*/);
$("#pic").append(formattedPic);

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
